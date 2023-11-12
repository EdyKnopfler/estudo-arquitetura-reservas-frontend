'use client';

import { useCallback, useState } from "react";
import { WeekSelector } from "../week-selector/week-selector";
import { Week } from "../week-selector/types";
import ScheduleMatrix from "../schedule-matrix/schedule-matrix";
import { ScheduleOption, StepSelection } from "@/app/fake-data/types";
import { FetchScheduleFunction } from "./types";

export default function Scheduler({
  currentSelection,
  fetchSchedule,
}: {
  currentSelection: StepSelection,
  fetchSchedule: FetchScheduleFunction,
}) {
  const [schedule, setSchedule] = useState([] as ScheduleOption[]);
  const [selection, setSelection] = useState(currentSelection)

  const weekSelected = useCallback(async (week: Week) => {
    const newSchedule = await fetchSchedule(week.start, week.end)
    setSchedule(newSchedule)
  }, [fetchSchedule]);

  const optionSelected = useCallback((selection: StepSelection) => {
    setSelection(selection)
  }, [])

  return (
    <>
      <WeekSelector refDate={new Date()} onWeekSelected={weekSelected} />
      {schedule.map((option) => 
        <>
          <h4>{option.name}</h4>
          <ScheduleMatrix
            selection={
              selection?.optionId === option.optionId 
                ? selection
                : null
            }
            dates={option.dates}
            optionSelected={(date, hour) =>
              optionSelected({ optionId: option.optionId, date, hour })}
          />
        </>
      )}
    </>
  )
}
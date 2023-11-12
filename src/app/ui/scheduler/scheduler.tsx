'use client';

import { useCallback, useState } from "react";
import { FetchScheduleFunction, ScheduleOption } from "../schedule-matrix/types";
import { WeekSelector } from "../week-selector/week-selector";
import { Week } from "../week-selector/types";
import ScheduleMatrix from "../schedule-matrix/schedule-matrix";

export default function Scheduler({ 
  fetchSchedule
}: {
  fetchSchedule: FetchScheduleFunction
}) {
  // TODO carregar o agendamento conforme o que já estava selecionado
  const [schedule, setSchedule] = useState([] as ScheduleOption[]);

  const weekSelected = useCallback(async (week: Week) => {
    const newSchedule = await fetchSchedule(week.start, week.end)
    setSchedule(newSchedule)
  }, [fetchSchedule]);

  return (
    <>
      <WeekSelector refDate={new Date()} onWeekSelected={weekSelected} />
      {schedule.map((option) => 
        <>
          <h4>{option.name}</h4>
          <ScheduleMatrix dates={option.dates} />
        </>
      )}
    </>
  )
}
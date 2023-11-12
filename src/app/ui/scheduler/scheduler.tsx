'use client';

import { useCallback, useState } from "react";
import { FetchScheduleFunction, ScheduleOption } from "../schedule-matrix/types";
import { WeekSelector } from "../week-selector/week-selector";
import { Week } from "../week-selector/types";

export default function Scheduler({ 
  fetchSchedule
}: {
  fetchSchedule: FetchScheduleFunction
}) {
  const [schedule, setSchedule] = useState([] as ScheduleOption[]);

  const weekSelected = useCallback(async (week: Week) => {
    const newSchedule = await fetchSchedule(week.start, week.end)
    setSchedule(newSchedule)
  }, [fetchSchedule]);

  return (
    <WeekSelector refDate={new Date()} onWeekSelected={weekSelected} />
  )
}
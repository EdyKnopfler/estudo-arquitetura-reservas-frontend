import { useCallback, useEffect, useState } from "react";
import { FetchScheduleFunction } from "../schedule-matrix/types";

export default function Scheduler({ 
  fetchSchedule
}: {
  fetchSchedule: FetchScheduleFunction
}) {
  const [week, setWeek]: [] = useState(null)
  const [schedule, setSchedule] = useState([]);

  const weekSelected = useCallback((week) => {]
    setWeek(week)
  }, [fetchSchedule]);

  useEffect(async () => {
    fetchSchedule(week.weekStart, week.weekEnd)
  }, [week])

  return (

  )
}
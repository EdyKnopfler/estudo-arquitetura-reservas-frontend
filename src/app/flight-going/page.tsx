'use client';

import { useCallback } from "react";
import { WeekSelector } from "../ui/week-selector/week-selector";

export default function Page() {

  const weekSelected = useCallback((week) => {
    console.log(week.start, week.end)
  }, [])

  return (
    <div className="stepPage">
      <WeekSelector refDate={new Date()} onWeekSelected={weekSelected} />
    </div>
  )
}
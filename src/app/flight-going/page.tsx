'use client';

import { useCallback } from "react";
import { WeekSelector } from "../ui/week-selector/week-selector";
import { Week } from "../ui/week-selector/types";

export default function Page() {

  const weekSelected = useCallback((week: Week) => {
    console.log(week.start, week.end)
  }, [])

  return (
    <div className="stepPage">
      <WeekSelector refDate={new Date()} onWeekSelected={weekSelected} />
    </div>
  )
}
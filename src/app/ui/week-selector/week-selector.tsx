import { useState, useCallback } from "react";

import './week-selector.scss';
import { WeekSelected } from "./types";
import { formatDate, incrementDaysTo, weekOf } from "./functions";
import Image from "next/image";

export function WeekSelector({ 
  refDate, 
  onWeekSelected 
}: {
  refDate: Date,
  onWeekSelected: WeekSelected
}) {
  const [week, setWeek] = useState(weekOf(refDate));

  const changeWeek = useCallback((increment: -7 | 7) => {
    const newWeekStart = incrementDaysTo(week.start, increment);
    const newWeek = weekOf(newWeekStart)
    setWeek(newWeek);
    onWeekSelected(newWeek);
  }, [week, onWeekSelected]);

  return (
    <div className="WeekSelector clearFix">
      <button className="previous" onClick={() => changeWeek(-7)}>
        <Image
          src="/arrow-left.png"
          alt="Semana anterior"
          width={24}
          height={24}
        />
      </button>
      <p>
        <b>{formatDate(week.start)}</b>
        <span>a</span>
        <b>{formatDate(week.end)}</b>
      </p>
      <button className="next" onClick={() => changeWeek(+7)}>
        <Image
          src="/arrow-right.png"
          alt="Próxima semana"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
import { StepSelection } from "@/app/fake-data/types";
import mountScheduleMatrixFrom from "./matrix-mount";

import './schedule-matrix.scss';
import { ScheduleDate } from "@/app/fake-data/types";
import { OptionSelected } from "./types";

export default function ScheduleMatrix({
  dates,
  selection,
  optionSelected
}: {
  dates: ScheduleDate[],
  selection: StepSelection | null | undefined,
  optionSelected: OptionSelected
}) {
  const matrix = mountScheduleMatrixFrom(dates);

  return (
    <div className="ScheduleMatrix">
      <table>
        <thead>
          <tr>
            <th></th>
            {matrix.uniqueHours.map((hour) => <td key={hour}>{hour}</td>)}
          </tr>
        </thead>
        <tbody>
          {matrix.uniqueDates.map((date) => (
            <tr key={date}>
              <th>{date}</th>
              {matrix.uniqueHours.map((hour) => 
                <td 
                  key={hour} 
                  className={
                    matrix.positions[date][hour]
                      ? 'available'
                      : 'unavailable'
                  }
                  onClick={
                    matrix.positions[date][hour]
                      ? () => optionSelected(date, hour)
                      : undefined
                  }
                >
                  {selection && selection.date === date && selection.hour == hour
                    ? 'X'
                    : ''
                  }
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
import mountScheduleMatrixFrom from "./matrix-mount";

import './schedule-matrix.scss';
import { ScheduleDate } from "./types";

export default function ScheduleMatrix({ dates }: { dates: ScheduleDate[] }) {
  const matrix = mountScheduleMatrixFrom(dates);
  console.log('matrix', matrix)

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
              {matrix.uniqueHours.map((hour) => (
                matrix.positions[date][hour]
                  ? <td key={hour} className="available"></td>
                  : <td key={hour} className="unavailable"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
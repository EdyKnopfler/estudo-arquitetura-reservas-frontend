import mountScheduleMatrixFrom from "./matrix-mount";

import './schedule-matrix.scss';

export default function ScheduleMatrix({ dates }) {
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
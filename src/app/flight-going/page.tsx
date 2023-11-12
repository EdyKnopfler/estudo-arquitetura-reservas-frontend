import { useCallback } from "react";
import { Week } from "../ui/week-selector/types";
import ScheduleMatrix from "../ui/schedule-matrix/schedule-matrix";
import { getFlightsFromTo } from "../fake-data/flights";

export default async function Page() {
  const weekStart = '';
  const weekEnd = '';
  const flights = await getFlightsFromTo(weekStart, weekEnd);
  let flightTable: any = [];

  if (flights) {
    flightTable = flights.map((airport) => {
      return (
        <>
          <h4>{airport.name}</h4>
          <ScheduleMatrix dates={airport.dates} />
        </>
      );
    });
  }

  return (
    <div className="stepPage">
      {flightTable}
    </div>
  )
}
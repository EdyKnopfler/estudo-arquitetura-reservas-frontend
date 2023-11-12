import { getFlightsFromTo } from '../fake-data/flights';
import ScheduleMatrix from '../ui/schedule-matrix/schedule-matrix'

export default async function Page() {
  const weekStart = '';
  const weekEnd = '';
  const flights = await getFlightsFromTo(weekStart, weekEnd);
  let flightTable = [];
  
  if (flights) {
    flightTable = flights.origins.map((airport) => {
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
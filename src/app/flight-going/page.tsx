import { getCurrentFlightGoing } from "../fake-data/current-selections"
import { getFlightsFromTo } from "../fake-data/flights"
import Scheduler from "../ui/scheduler/scheduler"

export default async function Page() {
  const userId = 1  // TODO autenticação
  const flightGoing = await getCurrentFlightGoing(userId)

  return (
    <div className="stepPage">
      <Scheduler 
        currentSelection={flightGoing}
        fetchSchedule={getFlightsFromTo} 
      />
    </div>
  )
}
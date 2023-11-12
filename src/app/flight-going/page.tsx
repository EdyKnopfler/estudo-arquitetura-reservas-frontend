import { getFlightsFromTo } from "../fake-data/flights"
import Scheduler from "../ui/scheduler/scheduler"

export default async function Page() {
  return (
    <div className="stepPage">
      <Scheduler fetchSchedule={async (startDate, endDate) => {
        'use server';
        return getFlightsFromTo(startDate, endDate)
      }} />
    </div>
  )
}
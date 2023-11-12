import { ScheduleOption, StepSelection } from "@/app/fake-data/types";

export type FetchScheduleFunction =
  (startDate: Date, endDate: Date) => Promise<ScheduleOption[]>;

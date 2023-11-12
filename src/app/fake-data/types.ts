export interface StepSelection {
  optionId: number;
  date: string;
  hour: string;
}

export interface ScheduleDate {
  date: string;
  hours: string[];
}

export interface ScheduleOption {
  optionId: number,
  name: string;
  dates: ScheduleDate[];
}

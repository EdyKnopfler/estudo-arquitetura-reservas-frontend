export interface ScheduleDate {
  date: string;
  hours: string[];
}

export interface ScheduleOption {
  name: string;
  dates: ScheduleDate[];
}

export type FetchScheduleFunction =
  (startDate: Date, endDate: Date) => Promise<ScheduleOption[]>;

export interface ScheduleMatrixData {
  uniqueDates: string[];
  uniqueHours: string[];
  positions: {
    [date: string]: {
      [hour: string]: boolean;
    }
  }
}
export interface ScheduleDate {
  date: string;
  hours: string[];
}

export interface ScheduleOption {
  name: string;
  dates: ScheduleDate[];
}

export type FetchScheduleFunction =
  (startDate: string, endDate: string) => ScheduleOption[];

export interface ScheduleMatrixData {
  uniqueDates: string[];
  uniqueHours: string[];
  positions: {
    [date: string]: {
      [hour: string]: boolean;
    }
  }
}
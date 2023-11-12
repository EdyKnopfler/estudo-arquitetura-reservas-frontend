export interface ScheduleMatrixData {
  uniqueDates: string[];
  uniqueHours: string[];
  positions: {
    [date: string]: {
      [hour: string]: boolean;
    }
  }
}

export type OptionSelected = (date: string, hour: string) => void
export interface Week {
  start: Date;
  end: Date;
}

export type WeekSelected = (week: Week) => void;
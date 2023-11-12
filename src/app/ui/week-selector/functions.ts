import { Week } from "./types";

export function incrementDaysTo(date: Date, days: number): Date {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

export function weekOf(refDate: Date): Week {
  const sunday = incrementDaysTo(refDate, -refDate.getDay())
  const saturday = incrementDaysTo(sunday, 6)
  return { start: sunday, end: saturday }
}

function twoZeros(n: number) {
  if (n < 10) {
    return `0${n}`;
  }

  return `${n}`;
}

export function formatDate(date: Date): string {
  return (
    twoZeros(date.getDate()) + '/' + twoZeros(date.getMonth() + 1) + '/' +
    date.getFullYear()
  );
}
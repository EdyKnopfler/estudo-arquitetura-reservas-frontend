'use server';
import { ScheduleOption } from "./types";

export async function getFlightsFromTo(
  startDate: Date, 
  endDate: Date
): Promise<ScheduleOption[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          optionId: 1111,
          name: 'Aeroporto de Congonhas (São Paulo)',
          dates: [
            {
              date: '25/03/1983',
              hours: ['12:00', '15:00', '17:00', '20:00']
            },
            {
              date: '25/03/2023',
              hours: ['09:00', '15:00', '19:00']
            }
          ]
        },
        {
          optionId: 2222,
          name: 'Galeão (Rio de Janeiro)',
          dates: [
            {
              date: '25/12/2023',
              hours: ['09:00', '12:00', '15:00', '18:00']
            }
          ]
        }
      ]);
    }, 1000);
  });
}
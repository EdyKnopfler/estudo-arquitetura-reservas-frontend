import { StepSelection } from "./types";

export async function getCurrentFlightGoing(
  userId: number
): Promise<StepSelection>  {
  'use server';
  console.log('lendo a seleção de voo de ida do servidor...')
  
  return {
    optionId: 1111,
    date: '25/03/2023',
    hour: '15:00'  
  }
}
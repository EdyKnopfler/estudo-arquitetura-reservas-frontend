'use client';

import Link from 'next/link';
import './step-navigator.scss';
import { usePathname } from 'next/navigation';

const FLIGHT_GOING = '/checkout/flight-going'
const FLIGHT_RETURNING = '/checkout/flight-returning'
const HOTEL = '/checkout/hotel'
const PAYMENT = '/checkout/payment'

export default function StepNavigator() {
  const step: string = usePathname()

  return (
    <nav className="StepNavigator clearFix">
      {
        step === FLIGHT_GOING
          ? <span>1. Voo (ida)</span>
          : <Link href={FLIGHT_GOING}>1. Voo (ida)</Link>
      }
      {
        step === FLIGHT_RETURNING
          ? <span>2. Voo (volta)</span>
          : <Link href={FLIGHT_RETURNING}>2. Voo (volta)</Link>
      }
      {
        step === HOTEL
          ? <span>3. Hotel</span>
          : <Link href={HOTEL}>3. Hotel</Link>
      }
      {
        step === PAYMENT
          ? <span>4. Pagamento</span>
          : <Link href={PAYMENT}>4. Pagamento</Link>
      }
    </nav>
  );
}
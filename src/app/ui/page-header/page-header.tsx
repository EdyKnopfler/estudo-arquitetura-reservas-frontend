'use client';
import SessionWrapper from '../session-wrapper';
import HamburgerMenu from './hamburger-menu';
import './page-header.scss';

export default function PageHeader() {
  return (
    <>
      <header className="PageHeader">
        <SessionWrapper>
          <HamburgerMenu />
        </SessionWrapper>
        <h1>Faça sua reserva!</h1>
      </header>
    </>
  )
}

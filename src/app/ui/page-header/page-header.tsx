import HamburgerMenu from './hamburger-menu';
import './page-header.scss';

export default function PageHeader() {
  return (
    <>
      <header className="PageHeader">
        <HamburgerMenu />
        <h1>Faça sua reserva!</h1>
      </header>
    </>
  )
}
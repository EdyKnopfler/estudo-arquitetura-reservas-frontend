'use client';

import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

import './burger-menu.scss';

export default function HamburgerMenu() {
  return (
    <Menu width="auto" noOverlay>
      {/* Algumas coisas quebram o hambúrguer, por ex. texto solto... :( */}
      <span>Nome do usuário</span>
      <Link href="/logout">Sair</Link>
    </Menu>
  )
}
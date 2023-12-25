import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

import './burger-menu.scss';
import { SyntheticEvent } from 'react';

export default function HamburgerMenu() {
  const session = useSession()
  console.log('session', session)
  const router = useRouter()

  const logout = async (event: SyntheticEvent) => {
    event.preventDefault()
    await signOut({ redirect: false })
    router.replace('/')
  }

  return (
    <Menu width="auto" noOverlay>
      {session?.data && <>
        {/* Algumas coisas quebram o hambúrguer, por ex. texto solto... :( */}
        <p>{session.data!.user!.name}</p>
        <form onSubmit={logout}>
          <button type="submit">Sair</button>
        </form>      
      </>}
      {!session?.data && <>
        <Link href="/login">Entrar</Link>
      </>}
    </Menu>
  )
}
import Image from 'next/image';
import Link from 'next/link';
//import { slide as Menu } from 'react-burger-menu';


export default function PageHeader() {
  return (
    <>
      <header className="PageHeader">
        <div>  {/* Menu */}
          Nome do usuário
          <Link href="/logout">Sair</Link>
        </div>
        <h1>Faça sua reserva!</h1>
      </header>
      
    </>
  )
}
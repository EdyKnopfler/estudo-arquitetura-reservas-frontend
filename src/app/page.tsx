import Image from "next/image";

import './home-page.scss';

export default function Home() {
  return (
    <section className="destinationSection clearFix">
      <section className="textContent">
        <h2>Nome do destino</h2>
        <p>Descrição do destino</p>
      </section>
      <Image
        src={"/destino-exemplo.jpg"}
        width={640}
        height={280}
        alt={"Nome do destino"}
      />
    </section>
  )
}

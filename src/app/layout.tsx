import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import styles from './globals.scss'

const barlowFont = Barlow({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Reserva de Voos e Hotéis',
  description: 'Interface do estudo de caso em arquitetura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlowFont.className} ${styles.pageArea}`}>
        
        {children}
      </body>
    </html>
  )
}

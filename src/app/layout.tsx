import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import styles from './globals.scss'
import PageHeader from './ui/page-header/page-header'
import StepNavigator from './ui/step-navigator/step-navigator'

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
        <PageHeader />
        <StepNavigator />
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}

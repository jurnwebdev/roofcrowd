import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Abel } from 'next/font/google'
import { Philosopher } from 'next/font/google'
import Footer from './components/Footer'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })
const abel = Abel({ weight: '400', subsets: ['latin'], variable: '--font-abel' })
const philosopher = Philosopher({ weight: '400', subsets: ['latin'], variable: '--font-philospher' })

export const metadata: Metadata = {
  title: 'Roofcrowd',
  description: 'Real Estate Investment Made Easy - REIME',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={abel.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

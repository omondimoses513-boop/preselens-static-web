import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Praecellens Consultancy Ltd | Engineering Solutions Kenya',
  description: 'Professional engineering consultancy services in Kenya - Civil, Structural, Mechanical, and more.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#001F3F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-light">
      <body className={`${jost.className} text-dark`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'E-Commerce Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

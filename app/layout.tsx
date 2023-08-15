import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ModelProvider from '@/providers/model-provider'
import ToastProvider from '@/providers/toast-provider'


const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
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
        <ModelProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

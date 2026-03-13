import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'FRUITIFIED by Kamala | Fresh Fruit Bowls & Juices Delivered',
  description:
    'Order fresh, handcrafted fruit bowls and cold-pressed juices delivered to your door. 100% natural, no preservatives, made with love in Secunderabad.',
  keywords: ['fruit bowls', 'fresh juice', 'cloud kitchen', 'healthy food', 'Secunderabad', 'Hyderabad', 'delivery', 'FRUITIFIED'],
}

export const viewport: Viewport = {
  themeColor: '#e8800a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

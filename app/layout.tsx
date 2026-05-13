import type { Metadata } from 'next'
import { Raleway, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Evolution Accelerator | Capital. Community. Culture.',
  description:
    "Evolution Accelerator is evolving the art of acceleration within California's Sacramento Valley — connecting capital, community, and culture to fuel the next generation of startups.",
  openGraph: {
    title: 'Evolution Accelerator | Capital. Community. Culture.',
    description:
      "Evolving the art of acceleration within California's Sacramento Valley.",
    url: 'https://evolutionacceleration.com',
    siteName: 'Evolution Accelerator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolution Accelerator | Capital. Community. Culture.',
    description:
      "Evolving the art of acceleration within California's Sacramento Valley.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body className="bg-[#F0F0F2] text-[#1A1510] font-inter antialiased">
        <CursorGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

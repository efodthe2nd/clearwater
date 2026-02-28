import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import BottomNav from './components/layout/Bottomnav'
import JsonLd from './components/JsonLd'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://clearwatermediagroup.com'),
  title: {
    default: 'Clearwater Media Group',
    template: '%s | Clearwater Media Group',
  },
  description: 'Clearwater Media Group acquires and grows digital media brands. We buy content sites and turn them into thriving businesses.',
  keywords: ['digital media', 'website acquisition', 'buy websites', 'sell your website', 'content sites', 'media portfolio'],
  authors: [{ name: 'Clearwater Media Group' }],
  creator: 'Clearwater Media Group',
  publisher: 'Clearwater Media Group',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clearwatermediagroup.com',
    siteName: 'Clearwater Media Group',
    title: 'Clearwater Media Group',
    description: 'Clearwater Media Group acquires and grows digital media brands. We buy content sites and turn them into thriving businesses.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Clearwater Media Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clearwater Media Group',
    description: 'Clearwater Media Group acquires and grows digital media brands. We buy content sites and turn them into thriving businesses.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <JsonLd />
      </head>
      <body className="font-outfit pb-16 md:pb-0">
        {children}
        <BottomNav />
      </body>
    </html>
  )
}
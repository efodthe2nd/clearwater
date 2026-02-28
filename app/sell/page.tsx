import type { Metadata } from 'next'
import SellPage from '../components/sell/SellPage'

export const metadata: Metadata = {
  title: 'Sell Your Site',
  description: 'Get a fair offer on your content website in 48 hours. Clearwater Media Group buys blogs and content sites of all sizes. Fast closings, escrow-protected payments.',
  alternates: {
    canonical: 'https://clearwatermediagroup.com/sell',
  },
  openGraph: {
    title: 'Sell Your Website | Clearwater Media Group',
    description: 'Get a fair offer on your content website in 48 hours. Fast closings, escrow-protected payments, no hidden fees.',
    url: 'https://clearwatermediagroup.com/sell',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Sell Your Site — Clearwater Media Group' }],
  },
}


export default function Sell() {
  return <SellPage />
}

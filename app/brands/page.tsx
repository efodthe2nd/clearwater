import type { Metadata } from 'next'
import BrandsPage from '../components/brands/BrandsPage'

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Explore the Clearwater Media Group portfolio — 20+ digital brands across home, travel, pets, food, gaming, and more. Each site built for real audiences.',
  alternates: {
    canonical: 'https://clearwatermediagroup.com/brands',
  },
  openGraph: {
    title: 'Our Portfolio | Clearwater Media Group',
    description: 'Explore the Clearwater Media Group portfolio — 20+ digital brands across home, travel, pets, food, gaming, and more.',
    url: 'https://clearwatermediagroup.com/brands',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Clearwater Media Group Portfolio' }],
  },
}



export default function Brands() {
  return <BrandsPage />
}

import type { Metadata } from 'next'
import AboutPage from '../components/about/AboutPage'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Clearwater Media Group — founded by John and Mathew Abraham. We build digital brands with integrity, impact, and long-term value.',
  alternates: {
    canonical: 'https://clearwatermediagroup.com/about',
  },
  openGraph: {
    title: 'About Clearwater Media Group',
    description: 'Learn about Clearwater Media Group — founded by John and Mathew Abraham. We build digital brands with integrity, impact, and long-term value.',
    url: 'https://clearwatermediagroup.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Clearwater Media Group' }],
  },
}

export default function About() {
  return <AboutPage />
}

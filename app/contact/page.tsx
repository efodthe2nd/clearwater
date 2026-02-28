import type { Metadata } from 'next'
import ContactPage from '../components/contact/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Clearwater Media Group. Whether you want to sell your site, explore a partnership, or just say hello — we\'re here.',
  alternates: {
    canonical: 'https://clearwatermediagroup.com/contact',
  },
  openGraph: {
    title: 'Contact Clearwater Media Group',
    description: 'Get in touch with Clearwater Media Group. Whether you want to sell your site, explore a partnership, or just say hello.',
    url: 'https://clearwatermediagroup.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Clearwater Media Group' }],
  },
}


export default function Contact() {
  return <ContactPage />
}

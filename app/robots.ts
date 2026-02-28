// app/robots.ts — place at app/robots.ts
// Next.js auto-serves this at /robots.txt

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://clearwatermediagroup.com/sitemap.xml',
    host: 'https://clearwatermediagroup.com',
  }
}

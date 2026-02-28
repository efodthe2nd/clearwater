// app/components/JsonLd.tsx
// Drop this component into app/layout.tsx inside <head> (or just before </body>)
// Structured data tells Google: this is a real company, here's everything about it

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization — who you are
      {
        '@type': 'Organization',
        '@id': 'https://clearwatermediagroup.com/#organization',
        name: 'Clearwater Media Group',
        url: 'https://clearwatermediagroup.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://clearwatermediagroup.com/logos/logo-default.png',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'john@clearwatermediagroup.com',
          contactType: 'customer service',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '30N Gould St',
          addressLocality: 'Sheridan',
          addressRegion: 'WY',
          postalCode: '82801',
          addressCountry: 'US',
        },
        description: 'Clearwater Media Group acquires and grows digital media brands. We buy content sites and turn them into thriving businesses.',
        founder: [
          {
            '@type': 'Person',
            name: 'John Abraham',
            jobTitle: 'Partner',
          },
          {
            '@type': 'Person',
            name: 'Mathew Abraham',
            jobTitle: 'Partner',
          },
        ],
      },
      // WebSite — enables Google sitelinks search box
      {
        '@type': 'WebSite',
        '@id': 'https://clearwatermediagroup.com/#website',
        url: 'https://clearwatermediagroup.com',
        name: 'Clearwater Media Group',
        publisher: {
          '@id': 'https://clearwatermediagroup.com/#organization',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

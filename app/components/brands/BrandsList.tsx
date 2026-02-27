import Image from 'next/image'
import Link from 'next/link'

const brands = [
  {
    slug: 'remodr',
    name: 'Remodr',
    description:
      'Remodr is a home improvement and renovation brand for people who want smart upgrades and stylish results. It features everything from weekend DIY ideas to full-scale renovation guides, all designed to help homeowners create spaces that are functional, beautiful, and built to last.',
    imageSrc: '/brands/remodr/preview.jpg',
    imageRight: true,
  },
  {
    slug: 'century-homes',
    name: 'Century Homes America',
    description:
      'Remodr is a home improvement and renovation brand for people who want smart upgrades and stylish results. It features everything from weekend DIY ideas to full-scale renovation guides, all designed to help homeowners create spaces that are functional,',
    imageSrc: '/brands/century-homes/preview.jpg',
    imageRight: false,
  },
  {
    slug: 'pawdown',
    name: 'PawDown',
    description:
      'Remodr is a home improvement and renovation brand for people who want smart upgrades and stylish results. It features everything from weekend DIY ideas to full-scale renovation guides, all designed to help homeowners create spaces that are functional, beautiful, and built to last.',
    imageSrc: '/brands/pawdown/preview.png',
    imageRight: true,
  },
  {
    slug: 'america-rewind',
    name: 'America Rewind',
    description:
      'Remodr is a home improvement and renovation brand for people who want smart upgrades and stylish results. It features everything from weekend DIY ideas to full-scale renovation guides, all designed to help homeowners create spaces that are functional, beautiful, and built to last.',
    imageSrc: '/brands/america-rewind/preview.png',
    imageRight: false,
  },
  {
    slug: 'anxious-adult',
    name: 'The Anxious Adult',
    description:
      'The Anxious Adult is a steady guide for anyone learning how to navigate life without a manual. It covers everything from everyday responsibilities and home decisions to travel ideas and nostalgic escapes that help you breathe a little easier. The site focuses on clear advice, practical tools, and small wins that make grown-up life feel less chaotic and more manageable.',
    imageSrc: '/brands/anxiousadult/preview.png',
    imageRight: true,
  },
  {
    slug: 'just-dip-recipes',
    name: 'Just Dip Recipes',
    description:
      'Just Dip Recipes brings cooking back to a simple idea: food should be enjoyable, doable, and worth sharing. It started with dips, but now the site covers everything from quick weeknight dishes to hosting tips that fit into real schedules. Every recipe is tested with busy lives in mind, making it a go-to spot for home cooks who want flavor without fuss.',
    imageSrc: '/brands/just-dip/preview.png',
    imageRight: false,
  },
  {
    slug: 'the-amazing-mom-life',
    name: 'The Amazing Mom Life',
    description:
      'The Amazing Mom Life is where real families find stories, ideas, and inspiration that make daily life feel warmer and more meaningful. From home and lifestyle tips to travel ideas and nostalgic throwbacks, the site blends practical guidance with heart. It’s a place where moms (and the people they love) find connection, encouragement, and a reminder that family life is more than a checklist.',
    imageSrc: '/brands/theamazingmomlife/preview.png',
    imageRight: true,
  },
  {
    slug: 'bushcraft-base-camp',
    name: 'Bushcraft Base Camp',
    description:
      'Bushcraft Base Camp is built for anyone drawn to the outdoors, whether you’re learning your first knife skill or planning a weekend deep in the woods. The site shares reliable bushcraft techniques, gear insights, and stories from people who live for time outside. It’s rooted in real experience and a respect for nature, helping readers feel confident and prepared for their next adventure.',
    imageSrc: '/brands/bushcraftbasecamp/preview.png',
    imageRight: false,
  },
]

export default function BrandsList() {
  return (
    <section className="bg-[#0a0a0a] py-8 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {brands.map((brand, idx) => {
          const isYellow = idx % 2 !== 0

          return (
            <div
              key={brand.slug}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: isYellow ? '#e8c200' : '#111111',
                border: isYellow ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <h2
                className="font-bold"
                style={{
                  fontSize: 'var(--font-h2)',
                  marginBottom: 'var(--mb-h2)',
                  color: isYellow ? '#000000' : '#ffffff',
                }}
              >
                {brand.name}
              </h2>

              <div
                className={`flex gap-6 items-start ${
                  brand.imageRight ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <p
                    className="text-sm leading-relaxed line-clamp-4"
                    style={{
                      color: isYellow
                        ? 'rgba(0,0,0,0.65)'
                        : 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {brand.description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-36 h-24 rounded-lg overflow-hidden flex-shrink-0 relative"
                  style={{ background: isYellow ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)' }}
                >
                  <Image
                    src={brand.imageSrc}
                    alt={brand.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* See more */}
              <div className="flex justify-center mt-6">
                <Link
                  href={`/brands/${brand.slug}`}
                  className="rounded-full px-5 py-2 text-sm transition-all duration-200 hover:opacity-80"
                  style={{
                    border: isYellow
                      ? '1px solid rgba(0,0,0,0.2)'
                      : '1px solid rgba(255,255,255,0.2)',
                    color: isYellow
                      ? 'rgba(0,0,0,0.7)'
                      : 'rgba(255,255,255,0.7)',
                  }}
                >
                  See more ↓
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
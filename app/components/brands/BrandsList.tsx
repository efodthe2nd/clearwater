import Image from 'next/image'
import Link from 'next/link'

const brands = [
  {
    slug: 'remodr',
    name: 'Remodr',
    url: 'https://remodr.com',
    description:
      'Remodr is a home improvement and renovation brand for people who want smart upgrades and stylish results. It features everything from weekend DIY ideas to full-scale renovation guides, all designed to help homeowners create spaces that are functional, beautiful, and built to last.',
    imageSrc: '/brands/remodr/preview.jpg',
    imageRight: true,
  },
  {
    slug: 'century-homes',
    name: 'Century Homes America',
    url: 'https://centuryhomesamerica.com',
    description:
      'Remodr is a home improvement and renovation brand for people who want smart upgrades and stylish results. It features everything from weekend DIY ideas to full-scale renovation guides, all designed to help homeowners create spaces that are functional,',
    imageSrc: '/brands/century-homes/preview.jpg',
    imageRight: false,
  },
  {
    slug: 'pawdown',
    name: 'PawDown',
    url: 'https://pawdown.com',
    description:
      'Remodr is a home improvement and renovation brand for people who want smart upgrades and stylish results. It features everything from weekend DIY ideas to full-scale renovation guides, all designed to help homeowners create spaces that are functional, beautiful, and built to last.',
    imageSrc: '/brands/pawdown/preview.png',
    imageRight: true,
  },
  {
    slug: 'america-rewind',
    name: 'America Rewind',
    url: 'https://americarewind.com',
    description:
      'Remodr is a home improvement and renovation brand for people who want smart upgrades and stylish results. It features everything from weekend DIY ideas to full-scale renovation guides, all designed to help homeowners create spaces that are functional, beautiful, and built to last.',
    imageSrc: '/brands/america-rewind/preview.png',
    imageRight: false,
  },
  {
    slug: 'anxious-adult',
    name: 'The Anxious Adult',
    url: 'https://theanxiousadult.com',
    description:
      'The Anxious Adult is a steady guide for anyone learning how to navigate life without a manual. It covers everything from everyday responsibilities and home decisions to travel ideas and nostalgic escapes that help you breathe a little easier. The site focuses on clear advice, practical tools, and small wins that make grown-up life feel less chaotic and more manageable.',
    imageSrc: '/brands/anxiousadult/preview.png',
    imageRight: true,
  },
  {
    slug: 'just-dip-recipes',
    name: 'Just Dip Recipes',
    url: 'https://justdiprecipes.com',
    description:
      'Just Dip Recipes brings cooking back to a simple idea: food should be enjoyable, doable, and worth sharing. It started with dips, but now the site covers everything from quick weeknight dishes to hosting tips that fit into real schedules. Every recipe is tested with busy lives in mind, making it a go-to spot for home cooks who want flavor without fuss.',
    imageSrc: '/brands/just-dip/preview.png',
    imageRight: false,
  },
  {
    slug: 'the-amazing-mom-life',
    name: 'The Amazing Mom Life',
    url: 'https://theamazingmomlife.net',
    description:
      'The Amazing Mom Life is where real families find stories, ideas, and inspiration that make daily life feel warmer and more meaningful. From home and lifestyle tips to travel ideas and nostalgic throwbacks, the site blends practical guidance with heart. It’s a place where moms (and the people they love) find connection, encouragement, and a reminder that family life is more than a checklist.',
    imageSrc: '/brands/theamazingmomlife/preview.png',
    imageRight: true,
  },
  {
    slug: 'bushcraft-base-camp',
    name: 'Bushcraft Base Camp',
    url: 'https://bushcraftbasecamp.com',
    description:
      'Bushcraft Base Camp is built for anyone drawn to the outdoors, whether you’re learning your first knife skill or planning a weekend deep in the woods. The site shares reliable bushcraft techniques, gear insights, and stories from people who live for time outside. It’s rooted in real experience and a respect for nature, helping readers feel confident and prepared for their next adventure.',
    imageSrc: '/brands/bushcraftbasecamp/preview.png',
    imageRight: false,
  },
  {
    slug: 'big-green-house',
    name: 'Big Green House',
    url: 'https://abiggreenhouse.com',
    description:
      'Big Green House is a home and cooking brand built around simple, approachable ideas that make everyday life easier. From quick desserts and easy savory dishes to practical home tips and DIY inspiration, everything we share is designed for real households. Whether you’re new to the kitchen or just want reliable, no-fuss recipes and home ideas, Big Green House keeps things clear, doable, and genuinely helpful.',
    imageSrc: '/brands/a-big-green-house/preview.png',
    imageRight: true,
  },
  {
    slug: 'the-wic-project',
    name: 'The WIC Project',
    url: 'https://wicproject.com',
    description:
      'The WiC Project is a lifestyle and review-driven brand focused on honest product insights, simple recipes, and everyday inspiration. What began as a small meal-focused blog has grown into a trusted space for readers looking for practical reviews, helpful tips, and approachable ideas that make daily life a little easier.',
    imageSrc: '/brands/the-wic-project/preview.png',
    imageRight: false,
  },
  {
    slug: 'backroad-planet',
    name: 'Backroad Planet',
    url: 'https://backroadplanet.com',
    description:
      'Backroad Planet is a travel brand focused on scenic routes, local history, and genuine on-the-road experiences. From road trips and small-town stops to cruises and international travel, we share stories and guides that help people plan meaningful adventures rooted in curiosity and real exploration.',
    imageSrc: '/brands/backroads-planet/preview.png',
    imageRight: true,
  },
  {
    slug: 'her-life-adventures',
    name: 'Her Life Adventures',
    url: 'https://herlifeadventures.com',
    description:
      'Her Life Adventures is a travel brand focused on meaningful exploration. We share guides, tips, and stories that help travelers connect with places, understand cultures, and enjoy their journeys with more awareness. From national parks to international trips, the goal is simple: travel with curiosity, respect, and a sense of purpose.',
    imageSrc: '/brands/her-life-adventures/preview.png',
    imageRight: false,
  },
  {
    slug: 'terraplanet-earth',
    name: 'Terraplanet Earth',
    url: 'https://terraplanetearth.com',
    description:
      'Terraplanet Earth is a nature and sustainability brand focused on helping people understand how our planet works and why it matters. Through clear explanations, practical insights, and grounded storytelling, we explore ecosystems, climate, wildlife, and the choices that shape our shared future. The goal is simple: reconnect people with the natural world and highlight solutions that support a healthier planet.',
    imageSrc: '/brands/terra-planet-earth/preview.png',
    imageRight: true,
  },
  {
    slug: 'wonder-and-joy',
    name: 'Wonder and Joy',
    url: 'https://thewonderandjoy.com',
    description:
      'Wonder and Joy is a lifestyle brand centered on simple living, personal atmosphere, and appreciation for the small details of everyday life. Through calm, thoughtful content about home, routines, mindset, and personal style, the site encourages readers to slow down, notice what matters, and create spaces and habits that feel intentional and warm.',
    imageSrc: '/brands/the-wonder-and-joy/preview.png',
    imageRight: false,
  }, {
    slug: 'gaming-lyfe',
    name: 'Gaming Lyfe',
    url: 'https://gaminglyfe.com',
    description:
      'Gaming Lyfe covers the overlap between gaming, tech, and competitive culture. From game launches and updates to hardware news and major sports moments, we break down what’s happening and why it matters. Our focus is on clear, direct coverage that helps readers stay informed and understand the context behind every update and event.',
    imageSrc: '/brands/gaming-lyfe/preview.png',
    imageRight: true,
  },
  {
    slug: 'nomads-in-nature',
    name: 'Nomads in Nature',
    url: 'https://nomadsinnature.com',
    description:
      'Nomads in Nature is an adventure travel brand focused on hiking, camping, RV life, and exploring the outdoors with intention. We share practical guides, destination ideas, and real experience-based tips that help people plan meaningful trips and enjoy nature with confidence.',
    imageSrc: '/brands/nomads-in-nature/preview.png',
    imageRight: false,
  },
  {
    slug: 'keep-the-tail-wagging',
    name: 'Keep the Tail Wagging',
    url: 'https://keepthetailwagging.com',
    description:
      'Keep The Tail Wagging is a dog-focused lifestyle brand built around practical guidance, real-world pet care, and the everyday joy of life with dogs. From training tips and nutrition insights to simple adventure ideas, the site helps dog owners raise healthy, active pets and make room for more connection, fun, and time outdoors.',
    imageSrc: '/brands/keep-the-tail-wagging/preview.png',
    imageRight: true,
  },
  {
    slug: 'tabbys-pantry',
    name: 'Tabbys Pantry',
    url: 'https://tabbyspantry.com',
    description:
      'Tabby’s Pantry is a family-focused lifestyle and food brand built around simple recipes, everyday fun, and life at home. From easy meals and kitchen favorites to family activities and outdoor inspiration, the site shares approachable ideas that make day-to-day living feel warm, practical, and enjoyable.',
    imageSrc: '/brands/tabbys-pantry/preview.png',
    imageRight: false,
  },
  {
    slug: 'ef-bomb-coach',
    name: 'EF Bomb Coach',
    url: 'https://efbombcoaching.com',
    description:
      'What the EF is a practical resource for people learning to manage executive functioning challenges in everyday life. The site breaks down skills like planning, organization, self-regulation, and time management in a clear, approachable way, with guidance designed for neurodivergent adults who want tools that actually work.',
    imageSrc: '/brands/ef-bomb-coach/preview.png',
    imageRight: true,
  },
  {
    slug: 'the-green-purpose',
    name: 'The Green Purpose',
    url: 'https://thegreenpurpose.com',
    description:
      'The Green Purpose is a sustainability brand focused on simple, realistic steps for eco-friendly living. From reducing waste and saving energy to easy DIY ideas, the site offers practical tips that help people build greener habits without overhauling their lifestyle.',
    imageSrc: '/brands/the-green-purpose/preview.png',
    imageRight: false,
  },
  {
    slug: 'movie-nights-at-home',
    name: 'Movie Nights at Home',
    url: 'https://movienightsathome.com',
    description:
      'Movie Nights at Home is a fun, family-friendly brand built around easy entertainment ideas. We share movie picks, snack recipes, and simple at-home tips that make staying in feel just as special as going out.',
    imageSrc: '/brands/movie-nights-at-home/preview.png',
    imageRight: true,
  },
  {
    slug: 'digital-nomad-and-a-dog',
    name: 'Digital Nomad And A Dog',
    url: 'https://digitalnomadandadog.com',
    description:
      'Digital Nomad and a Dog is a travel and lifestyle brand sharing practical tips for life on the road, with or without a pet. From destination guides to remote-work advice and dog-friendly travel insights, the site helps readers build meaningful travel experiences at any stage of life.',
    imageSrc: '/brands/digital-nomad-and-a-dog/preview.png',
    imageRight: false,
  },
  {
    slug: 'boot-camp-mom',
    name: 'Boot Camp Mom',
    url: 'https://bootcampmom.com',
    description:
      'Boot Camp Mom is a home and organization brand focused on simple systems that help families run smoother. Through clear routines, decluttering tips, and practical guidance, the site helps parents create order at home without overcomplicating daily life.',
    imageSrc: '/brands/boot-camp-mom/preview.png',
    imageRight: true,
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

              {/* Visit Website Button */}
              <div className="flex justify-center mt-6">
                <Link
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Visit Website ↓
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
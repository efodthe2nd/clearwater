import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '../ui/ScrollReveal'

const brands = [
  { slug: 'remodr', name: 'Remodr', url: 'https://remodr.com', description: 'Remodr is a home improvement and renovation brand for people who want smart upgrades and stylish results. It features everything from weekend DIY ideas to full-scale renovation guides, all designed to help homeowners create spaces that are functional, beautiful, and built to last.', imageSrc: '/brands/remodr/preview.jpg', imageRight: true },
  { slug: 'century-homes', name: 'Century Homes America', url: 'https://centuryhomesamerica.com', description: 'Century Homes America celebrates the beauty, resilience, and craftsmanship of historic American homes. It covers the architectural styles, stories, and restoration ideas that define classic homes across the U.S.', imageSrc: '/brands/century-homes/preview.jpg', imageRight: false },
  { slug: 'pawdown', name: 'PawDown', url: 'https://pawdown.com', description: 'Pawdown is a pet lifestyle site built for modern pet owners who treat their animals like family. From training tips and feeding advice to product guides and lighthearted stories.', imageSrc: '/brands/pawdown/preview.png', imageRight: true },
  { slug: 'america-rewind', name: 'America Rewind', url: 'https://americarewind.com', description: 'America Rewind makes American history engaging, accessible, and genuinely interesting. It tells the stories of the people, events, and cultural moments that shaped the country.', imageSrc: '/brands/america-rewind/preview.png', imageRight: false },
  { slug: 'anxious-adult', name: 'The Anxious Adult', url: 'https://theanxiousadult.com', description: 'The Anxious Adult is a steady guide for anyone learning how to navigate life without a manual. It covers everything from everyday responsibilities and home decisions to travel ideas and nostalgic escapes.', imageSrc: '/brands/anxiousadult/preview.png', imageRight: true },
  { slug: 'just-dip-recipes', name: 'Just Dip Recipes', url: 'https://justdiprecipes.com', description: 'Just Dip Recipes brings cooking back to a simple idea: food should be enjoyable, doable, and worth sharing. Every recipe is tested with busy lives in mind.', imageSrc: '/brands/just-dip/preview.png', imageRight: false },
  { slug: 'the-amazing-mom-life', name: 'The Amazing Mom Life', url: 'https://theamazingmomlife.net', description: 'The Amazing Mom Life is where real families find stories, ideas, and inspiration that make daily life feel warmer and more meaningful.', imageSrc: '/brands/theamazingmomlife/preview.png', imageRight: true },
  { slug: 'bushcraft-base-camp', name: 'Bushcraft Base Camp', url: 'https://bushcraftbasecamp.com', description: 'Bushcraft Base Camp is built for anyone drawn to the outdoors, whether learning your first knife skill or planning a weekend deep in the woods.', imageSrc: '/brands/bushcraftbasecamp/preview.png', imageRight: false },
  { slug: 'big-green-house', name: 'Big Green House', url: 'https://abiggreenhouse.com', description: 'Big Green House is a home and cooking brand built around simple, approachable ideas that make everyday life easier.', imageSrc: '/brands/a-big-green-house/preview.png', imageRight: true },
  { slug: 'the-wic-project', name: 'The WIC Project', url: 'https://wicproject.com', description: 'The WiC Project is a lifestyle and review-driven brand focused on honest product insights, simple recipes, and everyday inspiration.', imageSrc: '/brands/the-wic-project/preview.png', imageRight: false },
  { slug: 'backroad-planet', name: 'Backroad Planet', url: 'https://backroadplanet.com', description: 'Backroad Planet is a travel brand focused on scenic routes, local history, and genuine on-the-road experiences.', imageSrc: '/brands/backroads-planet/preview.png', imageRight: true },
  { slug: 'her-life-adventures', name: 'Her Life Adventures', url: 'https://herlifeadventures.com', description: 'Her Life Adventures is a travel brand focused on meaningful exploration — guides, tips, and stories that help travelers connect with places and cultures.', imageSrc: '/brands/her-life-adventures/preview.png', imageRight: false },
  { slug: 'terraplanet-earth', name: 'Terraplanet Earth', url: 'https://terraplanetearth.com', description: 'Terraplanet Earth is a nature and sustainability brand focused on helping people understand how our planet works and why it matters.', imageSrc: '/brands/terra-planet-earth/preview.png', imageRight: true },
  { slug: 'wonder-and-joy', name: 'Wonder and Joy', url: 'https://thewonderandjoy.com', description: 'Wonder and Joy is a lifestyle brand centered on simple living, personal atmosphere, and appreciation for the small details of everyday life.', imageSrc: '/brands/the-wonder-and-joy/preview.png', imageRight: false },
  { slug: 'gaming-lyfe', name: 'Gaming Lyfe', url: 'https://gaminglyfe.com', description: 'Gaming Lyfe covers the overlap between gaming, tech, and competitive culture — breaking down what\'s happening and why it matters.', imageSrc: '/brands/gaming-lyfe/preview.png', imageRight: true },
  { slug: 'nomads-in-nature', name: 'Nomads in Nature', url: 'https://nomadsinnature.com', description: 'Nomads in Nature is an adventure travel brand focused on hiking, camping, RV life, and exploring the outdoors with intention.', imageSrc: '/brands/nomads-in-nature/preview.png', imageRight: false },
  { slug: 'keep-the-tail-wagging', name: 'Keep the Tail Wagging', url: 'https://keepthetailwagging.com', description: 'Keep The Tail Wagging is a dog-focused lifestyle brand built around practical guidance, real-world pet care, and the everyday joy of life with dogs.', imageSrc: '/brands/keep-the-tail-wagging/preview.png', imageRight: true },
  { slug: 'tabbys-pantry', name: 'Tabbys Pantry', url: 'https://tabbyspantry.com', description: "Tabby's Pantry is a family-focused lifestyle and food brand built around simple recipes, everyday fun, and life at home.", imageSrc: '/brands/tabbys-pantry/preview.png', imageRight: false },
  { slug: 'ef-bomb-coach', name: 'EF Bomb Coach', url: 'https://efbombcoaching.com', description: 'A practical resource for people learning to manage executive functioning challenges — planning, organization, self-regulation, and time management made approachable.', imageSrc: '/brands/ef-bomb-coach/preview.png', imageRight: true },
  { slug: 'the-green-purpose', name: 'The Green Purpose', url: 'https://thegreenpurpose.com', description: 'The Green Purpose is a sustainability brand focused on simple, realistic steps for eco-friendly living.', imageSrc: '/brands/the-green-purpose/preview.png', imageRight: false },
  { slug: 'movie-nights-at-home', name: 'Movie Nights at Home', url: 'https://movienightsathome.com', description: 'Movie Nights at Home is a fun, family-friendly brand built around easy entertainment ideas — movie picks, snack recipes, and simple at-home tips.', imageSrc: '/brands/movie-nights-at-home/preview.png', imageRight: true },
  { slug: 'digital-nomad-and-a-dog', name: 'Digital Nomad And A Dog', url: 'https://digitalnomadandadog.com', description: 'Digital Nomad and a Dog shares practical tips for life on the road, with or without a pet — destination guides, remote-work advice, and dog-friendly travel insights.', imageSrc: '/brands/digital-nomad-and-a-dog/preview.png', imageRight: false },
  { slug: 'boot-camp-mom', name: 'Boot Camp Mom', url: 'https://bootcampmom.com', description: 'Boot Camp Mom is a home and organization brand focused on simple systems that help families run smoother.', imageSrc: '/brands/boot-camp-mom/preview.png', imageRight: true },
]

export default function BrandsList() {
  return (
    <section className="bg-[#0a0a0a] py-8 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {brands.map((brand, idx) => {
          const isYellow = idx % 2 !== 0
          return (
            <ScrollReveal key={brand.slug} threshold={0.1}>
              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: isYellow ? '#e8c200' : '#111111',
                  border: isYellow ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <h2 className="font-bold" style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)', color: isYellow ? '#000000' : '#ffffff' }}>
                  {brand.name}
                </h2>
                <div className={`flex gap-6 items-start ${brand.imageRight ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed line-clamp-4" style={{ color: isYellow ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.5)' }}>
                      {brand.description}
                    </p>
                  </div>
                  <div className="w-36 h-24 rounded-lg overflow-hidden flex-shrink-0 relative" style={{ background: isYellow ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)' }}>
                    <Image src={brand.imageSrc} alt={brand.name} fill className="object-cover object-top" />
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <Link
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-5 py-2 text-sm transition-all duration-200 hover:opacity-80"
                    style={{
                      border: isYellow ? '1px solid rgba(0,0,0,0.2)' : '1px solid rgba(255,255,255,0.2)',
                      color: isYellow ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)',
                    }}
                  >
                    Visit Website ↗
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
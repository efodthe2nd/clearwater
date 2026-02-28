import ScrollReveal from '../ui/ScrollReveal'

const founders = [
  {
    name: 'John Abraham',
    role: 'Partner',
    bio: 'John leads strategy, partnerships, and the business side of the company. He keeps every acquisition and new project aligned with our long-term vision and makes sure the work we ship meets the standards we hold for ourselves.',
  },
  {
    name: 'Mathew Abraham',
    role: 'Partner',
    bio: 'Mathew oversees growth, operations, and the day-to-day side of running our brands. He works closely with teams across the company to ensure each site delivers clear value and keeps moving forward.',
  },
]

export default function OurFounders() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <ScrollReveal>
          <h2 className="text-white font-bold text-center" style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)' }}>
            Our Founders
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <ScrollReveal direction="left" delay={150}>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <h3 className="text-white font-black" style={{ fontSize: 'var(--font-h3)', marginBottom: 'var(--mb-h3)' }}>
                  {founders[0].name}
                </h3>
                <span className="border border-[#fbd305] text-[var(--yellow)] text-xs font-semibold px-3 py-1 rounded-full">
                  {founders[0].role}
                </span>
              </div>
              <p className="text-white/60 text-base leading-relaxed">{founders[0].bio}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <h3 className="text-white font-black" style={{ fontSize: 'var(--font-h3)', marginBottom: 'var(--mb-h3)' }}>
                  {founders[1].name}
                </h3>
                <span className="border border-[#fbd305] text-[var(--yellow)] text-xs font-semibold px-3 py-1 rounded-full">
                  {founders[1].role}
                </span>
              </div>
              <p className="text-white/60 text-base leading-relaxed">{founders[1].bio}</p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
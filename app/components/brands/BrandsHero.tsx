import PageReveal from '../ui/PageReveal'

export default function BrandsHero() {
  return (
    <section className="bg-[#0a0a0a] pt-40 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <PageReveal masked delay={100} distance={56}>
          <h1 className="text-white font-bold leading-tight" style={{ fontSize: 'var(--font-h1)', marginBottom: 'var(--mb-h1)' }}>
            Our <span className="text-[var(--yellow)]">Portfolio</span>
          </h1>
        </PageReveal>
        <PageReveal delay={280}>
          <p className="text-white/60 text-base leading-relaxed">
            Take a look at the sites we own and operate. Each brand serves a real audience and is built with care, clarity, and purpose. We're proud of the work behind every project, and each one reflects our commitment to quality, trust, and steady growth.
          </p>
        </PageReveal>
      </div>
    </section>
  )
}
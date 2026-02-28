import PageReveal from '../ui/PageReveal'

export default function ContactHero() {
  return (
    <section className="relative bg-[#0a0a0a] pt-40 pb-20 px-6 text-center overflow-hidden">
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.6), transparent)',
          transform: 'translateX(-50%) rotate(-35deg)',
          transformOrigin: 'top center',
          filter: 'blur(1px)',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <PageReveal masked delay={100} distance={56}>
          <h1 className="text-white font-bold leading-tight" style={{ fontSize: 'var(--font-h1)', marginBottom: 'var(--mb-h1)' }}>
            Contact Us
          </h1>
        </PageReveal>
        <PageReveal delay={300}>
          <p className="text-white/60 text-base leading-relaxed">
            Have a question, partnership idea, or just want to say hello?
          </p>
          <p className="text-white/60 text-base leading-relaxed mt-2">
            Fill out the form below and we'll get back to you as soon as we can or drop an email.
          </p>
        </PageReveal>
      </div>
    </section>
  )
}
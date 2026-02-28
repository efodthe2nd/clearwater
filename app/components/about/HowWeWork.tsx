import ScrollReveal from '../ui/ScrollReveal'

export default function HowWeWork() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2
            className="text-white font-bold leading-tight"
            style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)' }}
          >
            How We <span className="text-[var(--yellow)]">Work</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-white/60 text-base leading-relaxed">
            People come to us because we keep things simple. We communicate clearly, move quickly, and treat every deal with respect. Whether we're acquiring a site or running one, our process is built on clarity, consistency, and follow-through.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
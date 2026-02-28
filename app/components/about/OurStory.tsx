import PageReveal from '../ui/PageReveal'

export default function OurStory() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <PageReveal delay={500}>
          <h2
            className="text-white font-bold leading-tight"
            style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)' }}
          >
            Our <span className="text-[var(--yellow)]">Story</span>
          </h2>
        </PageReveal>

        <PageReveal delay={650}>
          <p className="text-white/60 text-base leading-relaxed">
            Clearwater Media Group began with a simple goal: build digital brands
            that are useful, honest, and built to last. What started as two
            brothers experimenting with a few websites has grown into a wider
            network of online brands reaching millions every month. From day one,
            our focus has been straightforward: create content people can trust
            and return to. No shortcuts. No filler. Just work that earns its place.
          </p>
        </PageReveal>
      </div>
    </section>
  )
}
import PageReveal from '../ui/PageReveal'

export default function AboutHero() {
  return (
    <section className="relative bg-[#0a0a0a] pt-40 pb-16 px-6 text-center">
      <h1
        className="text-white font-black leading-tight max-w-3xl mx-auto"
        style={{ fontSize: 'var(--font-h1)', marginBottom: 'var(--mb-h1)' }}
      >
        <PageReveal masked delay={100} distance={56}>About Clear Media</PageReveal>
        <PageReveal masked delay={220} distance={56}>Group</PageReveal>
      </h1>
    </section>
  )
}
const missionPoints = [
  'Create content that informs and helps',
  'Build brands with long-term value',
  'Lead with transparency',
  'Support creators and partners at every step',
]

export default function OurMission() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white font-bold leading-tight" style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)' }}>
          Our <span className="text-[var(--yellow)]">Mission</span>
        </h2>
        <p className="text-white/60 text-base leading-relaxed mb-6">
          We want to raise the standard for digital media by putting real stories, strong communities, and steady growth at the center of what we do. Our focus is clear:
        </p>
        <ul className="text-white/60 text-base space-y-2 mb-6">
          {missionPoints.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
        <p className="text-white/60 text-base leading-relaxed">
          We measure success by the trust we earn and the value we create for our audience and partners.
        </p>
      </div>
    </section>
  )
}

const missionPoints = [
  'Publish content that informs and inspires',
  'Build brands that last',
  'Put transparency and trust first',
  'Partner with creators, not just platforms',
]

export default function OurMission() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white font-bold text-4xl md:text-5xl mb-8">
          Our <span className="text-[#F7F217]">Mission</span>
        </h2>
        <p className="text-white/60 text-base leading-relaxed mb-6">
          We're here to do digital media differently—by valuing real stories, strong communities,
          and sustainable growth. Our goal:
        </p>
        <ul className="text-white/60 text-base space-y-2 mb-6">
          {missionPoints.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
        <p className="text-white/60 text-base leading-relaxed">
          We measure success by the trust we earn and the value we create for both our audience and
          our partners.
        </p>
      </div>
    </section>
  )
}

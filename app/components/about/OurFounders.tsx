const founders = [
  {
    name: 'John Abraham',
    role: 'Partner',
    bio: 'Strategy, partnerships, and the business side of things. John makes sure every new project fits our vision and meets the highest standards.',
  },
  {
    name: 'Mathew Abraham',
    role: 'Partner',
    bio: 'Strategy, partnerships, and the business side of things. John makes sure every new project fits our vision and meets the highest standards.',
  },
]

export default function OurFounders() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white font-bold text-4xl md:text-5xl text-center mb-16">
          Our Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder) => (
            <div key={founder.name} className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <h3 className="text-white font-black text-2xl md:text-3xl">{founder.name}</h3>
                <span className="border border-[#fbd305] text-[#fbd305] text-xs font-semibold px-3 py-1 rounded-full">
                  {founder.role}
                </span>
              </div>
              <p className="text-white/60 text-base leading-relaxed">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

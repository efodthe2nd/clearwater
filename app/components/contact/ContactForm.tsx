export default function ContactForm() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 px-6 pb-48 overflow-hidden">

      {/* Watermark */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none whitespace-nowrap">
        ClearWater
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Label */}
        <p className="text-[#F7F217] text-sm font-semibold mb-3">Clean waters ®</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div>
            <h2 className="text-[#F7F217] font-black text-5xl md:text-7xl leading-tight mb-10">
              Get in touch
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-white font-bold text-sm">Email:</p>
                <a
                  href="mailto:john@ClearwaterMediaGroup.com"
                  className="text-white/60 text-sm hover:text-[#F7F217] transition-colors"
                >
                  john@ClearwaterMediaGroup.com
                </a>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Address:</p>
                <p className="text-white/60 text-sm">30N Gould st, sheridan, wyoming 82801</p>
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div
            className="rounded-2xl p-8 space-y-6"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#F7F217] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#F7F217] transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#F7F217] transition-colors resize-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white text-black font-bold text-sm px-8 py-3 rounded-full hover:bg-[#F7F217] transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

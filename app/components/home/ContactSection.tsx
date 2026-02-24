export default function ContactSection() {
  return (
    <section className="relative bg-[var(--black)] py-24 pb-48 px-6 overflow-hidden">
      {/* Large watermark text */}
      {/* Large watermark text */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none whitespace-nowrap">
        ClearWater
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top label */}
        <p className="text-[#fbd305] text-sm font-semibold mb-3 tracking-wide">
          Clearwater ®
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info */}
          <div>
            <h2 className="text-white font-black text-5xl md:text-7xl leading-tight mb-10">
              Get in touch
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-white font-bold text-sm">Email:</p>
                <a
                  href="mailto:john@ClearwaterMediaGroup.com"
                  className="text-white/70 text-sm hover:text-[#fbd305] transition-colors"
                >
                  john@ClearwaterMediaGroup.com
                </a>
              </div>

              <div>
                <p className="text-white font-bold text-sm">Address:</p>
                <p className="text-white/70 text-sm">
                  30N Gould st, sheridan, wyoming 82801
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#fbd305] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#fbd305] transition-colors"
              />
            </div>
            <div className="pt-2">
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#fbd305] transition-colors resize-none"
              />
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-[#fbd305] text-black font-bold text-sm px-8 py-3 rounded-full hover:bg-white transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

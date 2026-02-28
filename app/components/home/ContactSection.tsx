'use client'

import useInView from '../../hooks/UseInView'

const E = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function ContactSection() {
  const { ref, inView } = useInView(0.35)

  const up = (delay: number, distance = 24) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${distance}px)`,
    transition: `opacity 0.9s ${E} ${delay}ms, transform 0.9s ${E} ${delay}ms`,
  })

  return (
    <section className="relative bg-[var(--black)] py-24 pb-48 px-6 overflow-hidden" ref={ref}>

      {/* Watermark — slow fade, last */}
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none whitespace-nowrap"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 1.5s ${E} 800ms`,
        }}
      >
        ClearWater
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Label — first */}
        <p className="text-[var(--yellow)] text-sm font-semibold mb-3 tracking-wide" style={up(0)}>
          Clearwater ®
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left col */}
          <div>
            <h2
              className="text-white font-black leading-tight"
              style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)', ...up(100, 32) }}
            >
              Get in touch
            </h2>

            <div className="space-y-6">
              <div style={up(220)}>
                <p className="text-white font-bold text-sm">Email:</p>
                <a
                  href="mailto:john@ClearwaterMediaGroup.com"
                  className="text-white/70 text-sm hover:text-[var(--yellow)] transition-colors"
                >
                  john@clearwatermediagroup.com
                </a>
              </div>
              <div style={up(300)}>
                <p className="text-white font-bold text-sm">Address:</p>
                <p className="text-white/70 text-sm">30N Gould St, Sheridan, Wyoming 82801</p>
              </div>
            </div>
          </div>

          {/* Right col — form fields stagger */}
          <div className="space-y-4">
            <div style={up(200)}>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#fbd305] transition-colors"
              />
            </div>
            <div style={up(280)}>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#fbd305] transition-colors"
              />
            </div>
            <div className="pt-2" style={up(360)}>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#fbd305] transition-colors resize-none"
              />
            </div>
            <div className="flex justify-end pt-2" style={up(460)}>
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
  )
}
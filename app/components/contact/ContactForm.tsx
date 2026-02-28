'use client'

import PageReveal from '../ui/PageReveal'

const E = 'cubic-bezier(0.16, 1, 0.3, 1)'

// Inline directional reveal for opposing left/right motion
// Can't use ScrollReveal here since everything is above fold on load
function SideReveal({ children, from, delay }: { children: React.ReactNode, from: 'left' | 'right', delay: number }) {
  // We reuse PageReveal's mounted state pattern but with X translation
  // Simplest approach: use PageReveal for opacity/Y, add X via CSS animation
  return (
    <div
      style={{
        animation: `slideFrom${from === 'left' ? 'Left' : 'Right'} 0.9s ${E} ${delay}ms both`,
      }}
    >
      {children}
    </div>
  )
}

export default function ContactForm() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 px-6 pb-48 overflow-hidden">

      <div className="max-w-5xl mx-auto relative z-10">

        <PageReveal delay={400}>
          <p className="text-[var(--yellow)] text-sm font-semibold mb-3">ClearWater ®</p>
        </PageReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left col — slides from left */}
          <SideReveal from="left" delay={480}>
            <div>
              <h2 className="text-[var(--yellow)] font-black leading-tight" style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)' }}>
                Get in touch
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-white font-bold text-sm">Email:</p>
                  <a href="mailto:john@ClearwaterMediaGroup.com" className="text-white/60 text-sm hover:text-[#F7F217] transition-colors">
                    john@ClearwaterMediaGroup.com
                  </a>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Address:</p>
                  <p className="text-white/60 text-sm">30N Gould st, sheridan, wyoming 82801</p>
                </div>
              </div>
            </div>
          </SideReveal>

          {/* Right col — slides from right */}
          <SideReveal from="right" delay={580}>
            <div
              className="rounded-2xl p-8 space-y-6"
              style={{
                background: `
                  radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1px),
                  rgba(255,255,255,0.03)
                `,
                backgroundSize: '24px 24px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div>
                <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#F7F217] transition-colors" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#F7F217] transition-colors" />
              </div>
              <div>
                <textarea placeholder="Message" rows={4} className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#F7F217] transition-colors resize-none" />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-white text-black font-bold text-sm px-8 py-3 rounded-full hover:bg-[#F7F217] transition-colors duration-300">
                  Submit
                </button>
              </div>
            </div>
          </SideReveal>

        </div>
      </div>

      <style>{`
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      <PageReveal delay={600}>
        <div className="absolute -bottom-47 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none whitespace-nowrap">
          ClearWater
        </div>
      </PageReveal>
    </section>
  )
}
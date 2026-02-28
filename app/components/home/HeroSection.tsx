'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const GlobeScene = dynamic(() => import('./GlobeScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
})

export default function HeroSection() {
  const [phase, setPhase] = useState(0)
  // phase 0 = nothing visible
  // phase 1 = nav triggered (handled in Navbar via CSS)
  // phase 2 = line 1 "Clearwater"
  // phase 3 = line 2 "Media"
  // phase 4 = line 3 "Group"
  // phase 5 = subtext
  // phase 6 = globe
  // phase 7 = scroll indicator

  useEffect(() => {
    const timings = [
      { phase: 2, delay: 100 },
      { phase: 3, delay: 220 },
      { phase: 4, delay: 340 },
      { phase: 5, delay: 520 },
      { phase: 6, delay: 300 },  // globe starts early, materializes alongside text
      { phase: 7, delay: 900 },
    ]

    const timers = timings.map(({ phase, delay }) =>
      setTimeout(() => setPhase((prev) => Math.max(prev, phase)), delay)
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--black)] flex flex-col">

      {/* 3D Globe — entrance: scale up + fade in */}
      <div
        className="absolute right-0 top-16 w-full md:w-[58%] h-full"
        style={{
          opacity: phase >= 6 ? 1 : 0,
          transform: phase >= 6 ? 'scale(1)' : 'scale(0.88)',
          transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <GlobeScene />
      </div>

      {/* Left fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--black)] via-[var(--black)]/75 to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent pointer-events-none" />
      {/* Top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--black)] via-transparent to-transparent h-32 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto px-6 w-full pt-36 pb-28">
        <div className="max-w-xl">
          <h1 className="font-black leading-[0.88] tracking-tight" style={{ marginBottom: 'var(--mb-h1)' }}>

            {/* Line 1 — Clearwater */}
            <span
              className="block text-[var(--yellow)] overflow-hidden"
              style={{ fontSize: 'var(--font-h1)' }}
            >
              <span
                style={{
                  display: 'block',
                  opacity: phase >= 2 ? 1 : 0,
                  transform: phase >= 2 ? 'translateY(0)' : 'translateY(52px)',
                  transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Clearwater
              </span>
            </span>

            {/* Line 2 — Media */}
            <span
              className="block text-[var(--yellow)] overflow-hidden"
              style={{ fontSize: 'var(--font-h1)' }}
            >
              <span
                style={{
                  display: 'block',
                  opacity: phase >= 3 ? 1 : 0,
                  transform: phase >= 3 ? 'translateY(0)' : 'translateY(52px)',
                  transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Media
              </span>
            </span>

            {/* Line 3 — Group */}
            <span
              className="block text-white overflow-hidden"
              style={{ fontSize: 'var(--font-h1)' }}
            >
              <span
                style={{
                  display: 'block',
                  opacity: phase >= 4 ? 1 : 0,
                  transform: phase >= 4 ? 'translateY(0)' : 'translateY(52px)',
                  transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Group
              </span>
            </span>

          </h1>

          {/* Subtext */}
          <p
            className="mt-6 text-white/60 text-base md:text-lg font-light max-w-xs leading-relaxed"
            style={{
              opacity: phase >= 5 ? 1 : 0,
              transform: phase >= 5 ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            We acquire websites and turn them into thriving businesses
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="relative z-10 flex justify-center pb-10"
        style={{
          opacity: phase >= 7 ? 1 : 0,
          transform: phase >= 7 ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <a
          href="#brands"
          className="flex items-center gap-2.5 text-white/50 text-sm font-medium hover:text-white/80 transition-colors"
          style={{ animation: phase >= 7 ? 'scrollBlink 2s ease-in-out infinite' : 'none' }}
        >
          Scroll down
          <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-xs">
            ↓
          </span>
        </a>
      </div>

      <style>{`
        @keyframes scrollBlink {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(4px); }
        }
      `}</style>
    </section>
  )
}

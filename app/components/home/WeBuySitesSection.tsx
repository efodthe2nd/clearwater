'use client'

import { useEffect, useState } from 'react'
import useInView from '../../hooks/UseInView'

const E = 'cubic-bezier(0.16, 1, 0.3, 1)'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2s-5 6-5 10a5 5 0 0010 0c0-4-5-10-5-10z" fill="#fbd305"/>
        <line x1="12" y1="17" x2="12" y2="13" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Quick Closings:',
    description: 'Most sites are purchased and paid for within 7 to 10 days.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v5c0 4.418 3.582 8.618 8 9.9C16.418 20.618 20 16.418 20 12V7L12 3z" fill="#fbd305"/>
        <path d="M9 12l2 2 4-4" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Fair Offers:',
    description: 'We base our valuation on real traffic and revenue data so you know the price is grounded in facts.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C12 3 6 10 6 14.5a6 6 0 0012 0C18 10 12 3 12 3z" fill="#fbd305"/>
      </svg>
    ),
    title: 'Safe & Simple:',
    description: 'Clear contracts, secure payments, and guidance at every step.',
  },
]

// Counts from 0 to target over ~1s when triggered
function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 1000
    const steps = 40
    const increment = target / steps
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, interval)
    return () => clearInterval(timer)
  }, [active, target])
  return count
}

export default function WeBuySitesSection() {
  const { ref, inView } = useInView(0.2)
  const count = useCountUp(20, inView)

  const reveal = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.9s ${E} ${delay}ms, transform 0.9s ${E} ${delay}ms`,
  })

  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 overflow-hidden" ref={ref}>

      <img src="/vectors/paint-splatter.png" alt="" className="absolute top-0 right-0 w-48 pointer-events-none select-none" />

      <div className="max-w-5xl mx-auto">

        {/* Header — two lines stagger */}
        <div className="text-center mb-16">
          <h2 className="font-black leading-tight" style={{ marginBottom: 'var(--mb-h2)' }}>
            <span className="block text-[var(--yellow)]" style={{ fontSize: 'var(--font-h2)', ...reveal(0) }}>
              We Buy Sites
            </span>
            <span className="block text-white" style={{ fontSize: 'var(--font-h2)', ...reveal(100) }}>
              Fast, Fair, and Straightforward
            </span>
          </h2>
          <p className="text-white/50 mt-5 text-base leading-relaxed" style={reveal(200)}>
            We keep things simple. You get a clear offer, a secure payout, and a smooth process from start to finish.
            <br />Most deals wrap up within a week or two.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Features — each item staggered */}
          <div className="space-y-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="flex items-start gap-4"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-24px)',
                  transition: `opacity 0.8s ${E} ${320 + i * 120}ms, transform 0.8s ${E} ${320 + i * 120}ms`,
                }}
              >
                <span className="flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <h3 className="text-white font-semibold" style={{ fontSize: '18px', marginBottom: '8px' }}>{f.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stat card — scale up + fade */}
          <div
            className="rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[200px]"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              transition: `opacity 0.9s ${E} 400ms, transform 0.9s ${E} 400ms`,
            }}
          >
            <span className="text-[var(--yellow)] font-black leading-none" style={{ fontSize: 'clamp(5rem, 12vw, 7rem)' }}>
              {count}
            </span>
            <p className="text-white font-semibold text-base mt-2">Days Maximum</p>
            <p className="text-white/60 text-sm mt-1">
              Most deals close{' '}
              <span className="text-[var(--yellow)] font-semibold">in 7 to 10 Days</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14" style={reveal(680)}>
          <a
            href="/sell"
            className="flex items-center gap-3 bg-[#1a1a1a] border border-white/10 rounded-full pl-6 pr-2 py-2 text-white font-semibold text-sm hover:bg-[#fbd305] hover:text-black hover:border-transparent transition-all duration-300 group"
          >
            Learn More
            <span className="w-8 h-8 rounded-full bg-[#fbd305] text-black flex items-center justify-center group-hover:bg-black group-hover:text-[var(--yellow)] transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import useInView from '../../hooks/UseInView'

const brands = [
  { id: 1, slug: 'america-rewind', name: 'America Rewind', description: 'A digital media brand covering American history, politics, and culture. We dig into the stories, events, and figures that shaped the nation — told with honesty and depth.', logoSrc: '/brands/america-rewind/logo.png', previewSrc: '/brands/america-rewind/preview.png' },
  { id: 2, slug: 'century-homes', name: 'Century Homes America', description: 'A digital media brand that dives into the charm and character of historic American homes. From restoration tips to architectural deep dives, it celebrates the stories, styles, and craftsmanship that have stood the test of time.', logoSrc: '/brands/century-homes/logo.jpg', previewSrc: '/brands/century-homes/preview.jpg' },
  { id: 3, slug: 'pawdown', name: 'PawDown', description: 'A digital media brand that celebrates the bond between people and their pets. From training tips to product roundups and feel-good stories, it covers the moments, habits, and trends that matter to modern pet owners.', logoSrc: '/brands/pawdown/logo.png', previewSrc: '/brands/pawdown/preview.png' },
  { id: 4, slug: 'remodr', name: 'Remodr', description: 'A digital media brand that explores smart, stylish home improvement. From DIY upgrades to full-scale remodels, it features ideas, products, and advice that help homeowners create spaces that work and wow.', logoSrc: '/brands/remodr/logo.png', previewSrc: '/brands/remodr/preview.jpg' },
  { id: 5, slug: 'anxious-adult', name: 'The Anxious Adult', description: 'The Anxious Adult is a steady guide for anyone learning how to navigate life without a manual. It covers everything from everyday responsibilities and home decisions to travel ideas and nostalgic escapes.', logoSrc: '/brands/anxiousadult/logo.png', previewSrc: '/brands/anxiousadult/preview.png' },
  { id: 6, slug: 'just-dip-recipes', name: 'Just Dip Recipes', description: 'Just Dip Recipes brings cooking back to a simple idea: food should be enjoyable, doable, and worth sharing. Every recipe is tested with busy lives in mind.', logoSrc: '/brands/just-dip/logo.png', previewSrc: '/brands/just-dip/preview.png' },
  { id: 7, slug: 'the-amazing-mom-life', name: 'The Amazing Mom Life', description: 'The Amazing Mom Life is where real families find stories, ideas, and inspiration that make daily life feel warmer and more meaningful.', logoSrc: '/brands/theamazingmomlife/logo.png', previewSrc: '/brands/theamazingmomlife/preview.png' },
  { id: 8, slug: 'bushcraft-base-camp', name: 'Bushcraft Base Camp', description: "Bushcraft Base Camp is built for anyone drawn to the outdoors, whether you're learning your first knife skill or planning a weekend deep in the woods.", logoSrc: '/brands/bushcraftbasecamp/logo.png', previewSrc: '/brands/bushcraftbasecamp/preview.png' },
]

// Spring-like easing: fast out, overshoots slightly, settles — gives the "thump"
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)'
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function BrandsSection() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<1 | -1>(1) // 1 = forward, -1 = backward
  const [animating, setAnimating] = useState(false)
  const { ref: sectionRef, inView } = useInView(0.45)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function goTo(index: number) {
    if (animating || index === active) return
    setDirection(index > active ? 1 : -1)
    setPrev(active)
    setActive(index)
    setAnimating(true)
    setTimeout(() => {
      setPrev(null)
      setAnimating(false)
    }, 600)
  }

  function goNext() {
    goTo((active + 1) % brands.length)
  }

  // Auto-advance every 4s when in view, pause when animating
  useEffect(() => {
    if (!inView) return
    intervalRef.current = setInterval(goNext, 4000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [inView, active, animating])

  const brand = brands[active]
  const prevBrand = prev !== null ? brands[prev] : null

  return (
    <section id="brands" className="bg-[var(--black)] py-24 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">

        <h2
          className="text-white font-bold text-center"
          style={{
            fontSize: 'var(--font-h2)',
            marginBottom: '3rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 1s ${EASE}, transform 1s ${EASE}`,
          }}
        >
          Our Brands
        </h2>

        {/* Carousel container — clips the sliding cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Preview image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-48px)',
              transition: `opacity 1s ${EASE} 250ms, transform 1s ${EASE} 250ms`,
            }}
          >
            {/* Outgoing card */}
            {prevBrand && (
              <div className="absolute inset-0"
                style={{
                  animation: `slideOut${direction > 0 ? 'Left' : 'Right'} 0.6s ${SPRING} forwards`,
                }}
              >
                <Image src={prevBrand.previewSrc} alt="" fill className="object-cover object-top" />
              </div>
            )}
            {/* Incoming card */}
            <div className="absolute inset-0"
              style={{
                animation: animating ? `slideIn${direction > 0 ? 'Right' : 'Left'} 0.6s ${SPRING} forwards` : 'none',
              }}
            >
              <Image src={brand.previewSrc} alt={`${brand.name} preview`} fill className="object-cover object-top" />
            </div>
          </div>

          {/* Info card */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0) scale(1)' : 'translateX(48px) scale(0.97)',
              transition: `opacity 1s ${EASE} 450ms, transform 1s ${EASE} 450ms`,
            }}
          >
            {/* Outgoing info */}
            {prevBrand && (
              <div className="absolute inset-0 bg-[#fbd405] rounded-2xl p-8 flex flex-col gap-6"
                style={{
                  animation: `slideOut${direction > 0 ? 'Left' : 'Right'} 0.6s ${SPRING} forwards`,
                }}
              >
                <div className="relative h-9 w-40 self-start">
                  <Image src={prevBrand.logoSrc} alt="" fill className="object-contain object-left" />
                </div>
                <div className="flex-1">
                  <h3 className="text-black font-bold text-xl mb-3">{prevBrand.name}</h3>
                  <p className="text-black/75 text-sm leading-relaxed">{prevBrand.description}</p>
                </div>
              </div>
            )}
            {/* Incoming info */}
            <div className="bg-[#fbd405] rounded-2xl p-8 flex flex-col gap-6 h-full"
              style={{
                animation: animating ? `slideIn${direction > 0 ? 'Right' : 'Left'} 0.6s ${SPRING} forwards` : 'none',
              }}
            >
              <div className="relative h-9 w-40 self-start">
                <Image src={brand.logoSrc} alt={`${brand.name} logo`} fill className="object-contain object-left" />
              </div>
              <div className="flex-1">
                <h3 className="text-black font-bold text-xl mb-3">{brand.name}</h3>
                <p className="text-black/75 text-sm leading-relaxed">{brand.description}</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={goNext}
                  className="w-8 h-8 rounded-full border border-black/30 flex items-center justify-center text-black/60 hover:text-black hover:border-black transition-colors"
                  aria-label="Next brand"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div
          className="flex justify-center gap-3 mt-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 0.9s ${EASE} 700ms, transform 0.9s ${EASE} 700ms`,
          }}
        >
          {brands.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Brand ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active ? 'bg-[#fbd405] scale-125' : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes slideInRight  { from { transform: translateX(60px);  opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInLeft   { from { transform: translateX(-60px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideOutLeft  { from { transform: translateX(0); opacity: 1; } to { transform: translateX(-60px); opacity: 0; } }
        @keyframes slideOutRight { from { transform: translateX(0); opacity: 1; } to { transform: translateX(60px);  opacity: 0; } }
      `}</style>
    </section>
  )
}
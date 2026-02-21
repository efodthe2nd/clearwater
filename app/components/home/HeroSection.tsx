import dynamic from 'next/dynamic'

const GlobeScene = dynamic(() => import('./GlobeScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--black)] flex flex-col">

      {/* 3D Globe — pushed down from top, right-aligned */}
      <div className="absolute right-0 top-16 w-full md:w-[58%] h-full">
        <GlobeScene />
      </div>

      {/* Left fade — text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--black)] via-[var(--black)]/75 to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent pointer-events-none" />
      {/* Top fade — softens globe top edge */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--black)] via-transparent to-transparent h-32 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto px-6 w-full pt-36 pb-28">
        <div className="max-w-xl">
          <h1 className="font-black leading-[0.88] tracking-tight">
            <span
              className="block text-[var(--yellow)]"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
            >
              Clearwater
            </span>
            <span
              className="block text-[var(--yellow)]"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
            >
              Media
            </span>
            <span
              className="block text-white"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
            >
              Group
            </span>
          </h1>

          <p className="mt-6 text-white/60 text-base md:text-lg font-light max-w-xs leading-relaxed">
            We launch, grow, and turn ideas into thriving digital destinations.
          </p>
        </div>
      </div>

      {/* Scroll down — blink animation */}
      <div className="relative z-10 flex justify-center pb-10">
        <a
          href="#brands"
          className="flex items-center gap-2.5 text-white/50 text-sm font-medium hover:text-white/80 transition-colors"
          style={{ animation: 'scrollBlink 2s ease-in-out infinite' }}
        >
          Scroll down
          <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-xs">
            ↓
          </span>
        </a>
      </div>

      {/* Blink keyframe */}
      <style>{`
        @keyframes scrollBlink {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(4px); }
        }
      `}</style>
    </section>
  )
}

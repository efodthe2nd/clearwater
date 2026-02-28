import ScrollReveal from '../ui/ScrollReveal'

export default function AboutFooter() {
  return (
    <>
      <div className="relative bg-[#0a0a0a] h-40 overflow-x-clip overflow-y-clip">
        <ScrollReveal threshold={0.1}>
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none whitespace-nowrap">
            ClearWater
          </div>
        </ScrollReveal>
      </div>

      <footer className="bg-[#fbd305] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-black text-xs font-medium">
            © 2026 Clearwaters Media Group. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
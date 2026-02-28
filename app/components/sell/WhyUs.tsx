const reasons = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-5-5-11-5-11z" fill="#F7F217"/>
      </svg>
    ),
    title: 'Fast Closings',
    description: 'Most deals wrap up in seven to ten days. No long waits to get paid.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v5c0 4.418 3.582 8.618 8 9.9C16.418 20.618 20 16.418 20 12V7L12 3z" fill="#4ade80"/>
        <path d="M9 12l2 2 4-4" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Safe Payments',
    description: 'Every payment goes through Escrow.com for added security and peace of mind.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#a78bfa"/>
        <path d="M12 8v4M12 16h.01" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'No Headaches',
    description: 'Clear terms and simple steps. No endless forms or dragged-out calls.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#f97316"/>
        <path d="M8 12l3 3 5-5" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Proven Track Record',
    description: 'Our process is shaped by years of buying and operating content sites.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#38bdf8"/>
        <path d="M9 9h6M9 12h6M9 15h4" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Any Site, Any Stage',
    description: 'We buy established sites, growing projects, and everything in between.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white font-bold text-center" style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)' }}>
          Why Us ?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12">
          {reasons.map((r) => (
            <div key={r.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#161616] flex items-center justify-center border border-white/10">
                {r.icon}
              </div>
              <h3 className="text-white font-semibold" style={{ fontSize: '14px', marginBottom: '4px' }}>{r.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

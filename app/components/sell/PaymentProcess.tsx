const payments = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" fill="#F7F217" opacity="0.2" stroke="#F7F217" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="#F7F217" strokeWidth="1.5"/>
        <path d="M6 15h4" stroke="#F7F217" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Escrow Protection',
    description:
      'All payments are handled through Escrow.com. This means your money is held securely and only released when both sides are satisfied — no risk, no surprises.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F7F217" strokeWidth="1.5" fill="none"/>
        <path d="M12 7v5l3 3" stroke="#F7F217" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Step-by-Step Transparency',
    description:
      'Once we agree on terms, we send the full payment to escrow before you transfer your site. You\'ll see the funds are locked and ready.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F7F217" stroke="#F7F217" strokeWidth="1.5"/>
      </svg>
    ),
    title: "You're in Control",
    description:
      'You transfer your site only after escrow confirms payment is secured. Once the transfer is complete, you get paid — usually within hours.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#F7F217" strokeWidth="1.5" fill="none"/>
        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#F7F217" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M9 12h6" stroke="#F7F217" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'No Hidden Fees',
    description:
      'We cover all escrow fees, so the amount you see is the amount you get.',
  },
]

export default function PaymentProcess() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-white font-bold text-3xl md:text-4xl text-center mb-4">
          Payment Process?
        </h2>
        <p className="text-white/50 text-sm text-center mb-12">
          We keep payment safe and straightforward, so you never have to worry about getting paid.
        </p>

        <div className="space-y-4">
          {payments.map((p) => (
            <div
              key={p.title}
              className="border border-white/10 rounded-2xl p-8 bg-[#0d0d0d]"
            >
              <div className="flex items-center gap-3 mb-4">
                {p.icon}
                <h3 className="text-white font-bold text-base">{p.title}</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

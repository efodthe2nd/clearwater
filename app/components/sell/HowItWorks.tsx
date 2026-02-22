const steps = [
  {
    number: '1',
    title: 'Reach Out',
    description: 'Get in touch and tell us about your site. We\'ll respond within 48 hours with a first-look offer.',
  },
  {
    number: '2',
    title: 'Review & Verify',
    description: 'We review your site\'s numbers — traffic, earnings, and key details. No endless paperwork.',
  },
  {
    number: '3',
    title: 'Sign & Transfer',
    description: 'Agree on terms, sign a simple agreement and transfer site access after funds are secured in escrow.',
  },
  {
    number: '4',
    title: 'Get Paid',
    description: 'You get your money through escrow. We are done within 5–7 days start to finish.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white font-bold text-3xl md:text-4xl text-center mb-12">
          How it works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-white/10 rounded-2xl p-6 bg-[#111111]"
            >
              <div className="w-8 h-8 rounded-full bg-[#F7F217] flex items-center justify-center mb-4">
                <span className="text-black font-black text-sm">{step.number}</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-3">{step.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

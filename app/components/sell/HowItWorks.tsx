import PageReveal from '../ui/PageReveal'
import ScrollReveal from '../ui/ScrollReveal'

const steps = [
  { number: '1', title: 'Reach Out', description: "Tell us about your site. We'll take a quick look and send a first offer within 48 hours." },
  { number: '2', title: 'Review & Verify', description: 'We go through your traffic, earnings, and key details. Nothing complicated, no endless forms.' },
  { number: '3', title: 'Sign & Transfer', description: 'Once we agree on terms, you sign a simple contract and transfer site access after the funds are secured in escrow.' },
  { number: '4', title: 'Get Paid', description: 'Your payment clears through escrow. Start to finish, most deals close in five to seven days.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <PageReveal delay={500}>
          <h2 className="text-white font-bold text-center" style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)' }}>
            How it works
          </h2>
        </PageReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100} threshold={0.1}>
              <div className="border border-white/10 rounded-2xl p-6 bg-[#111111] h-full">
                <div className="w-8 h-8 rounded-full bg-[#fbd305] flex items-center justify-center mb-4">
                  <span className="text-black font-black text-sm">{step.number}</span>
                </div>
                <h3 className="text-white font-bold" style={{ fontSize: '18px', marginBottom: '8px' }}>{step.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
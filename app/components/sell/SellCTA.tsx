export default function SellCTA() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-2xl mx-auto space-y-12">

        {/* Quote */}
        <div className="text-center">
          <div className="text-[#fbd305] text-4xl font-serif leading-none mb-4">"</div>
          <p className="text-white/60 text-sm leading-relaxed italic">
            Your payment is 100% safe, protected by escrow, and delivered fast —
            <br />no exceptions.
          </p>
        </div>

        {/* CTA Card */}
        <div className="border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="text-white font-bold text-2xl mb-4">
            Thinking About Selling? Let's{' '}
            <span className="text-[#fbd305]">Talk</span>
          </h2>
          <p className="text-white/50 text-sm font-mono leading-relaxed mb-8 max-w-md mx-auto">
            Doesn't matter if your site is booming or just getting by — we'll give you a fair,
            no-pressure valuation within 48 hours. Unsure if we're the right fit? That's why we're
            here. Ask anything.
            <br />
            <br />
            Let's see what's possible.
          </p>
          <a
            href="/contact"
            className="inline-block border border-white/20 rounded-full px-8 py-3 text-white text-sm tracking-widest hover:bg-[#F7F217] hover:text-black hover:border-transparent transition-all duration-300"
          >
            LET'S TALK
          </a>
        </div>

      </div>
    </section>
  )
}

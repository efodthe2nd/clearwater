export default function SellCTA() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-2xl mx-auto space-y-12">

        {/* Quote */}
        <div className="text-center">
          <div className="text-[var(--yellow)] text-4xl font-serif leading-none mb-4">"</div>
          <p className="text-white/60 text-sm leading-relaxed italic">
            Your payment is 100% safe, protected by escrow, and delivered fast —
            <br />no exceptions.
          </p>
        </div>

        {/* CTA Card */}
        <div className="border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="text-white font-bold" style={{ fontSize: 'var(--font-h2)', marginBottom: 'var(--mb-h2)' }}>
            Thinking About Selling? Let's{' '}
            <span className="text-[var(--yellow)]">Talk</span>
          </h2>
          <p className="text-white/50 text-sm font-mono leading-relaxed mb-8 max-w-md mx-auto">
            Whether your site is growing fast or barely being updated, we’ll give you a fair, no-pressure valuation within 48 hours. If you’re unsure whether we’re the right fit, ask us anything. That’s what we’re here for.
            <br />
            <br />
            Let's find out what's possible.
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

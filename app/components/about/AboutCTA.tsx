export default function AboutCTA() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-10">
        <p className="text-white/60 text-base leading-relaxed">
          Want to get in touch? We’re always open to a real conversation -
          <br />
          not just another "About Us" page.
        </p>

        {/* CTA + Socials row */}
        <div className="flex items-center justify-between w-full flex-wrap gap-6">
          <a
            href="/contact"
            className="border border-white/20 rounded-full px-7 py-3 text-white font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Learn More
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#fbd305] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#fbd305] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#fbd305] flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="black" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2s-5 6-5 10a5 5 0 0010 0c0-4-5-10-5-10z" fill="#F7F217" />
        <line
          x1="12"
          y1="17"
          x2="12"
          y2="13"
          stroke="#0a0a0a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Quick Closings:",
    description: "Most sites are sold and paid for within 7–10 days",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L4 7v5c0 4.418 3.582 8.618 8 9.9C16.418 20.618 20 16.418 20 12V7L12 3z"
          fill="#F7F217"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#0a0a0a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Honest Offers:",
    description:
      "We use real traffic and revenue data to give you a fair price",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C12 3 6 10 6 14.5a6 6 0 0012 0C18 10 12 3 12 3z"
          fill="#F7F217"
        />
      </svg>
    ),
    title: "Safe & Simple:",
    description: "Clear contracts, secure payments, and help at every step",
  },
];

export default function WeBuySitesSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      {/* Paint splatter — real image, bleeds off top-right edge */}
      <div className="absolute -top-4 -right-8 w-48 h-96 pointer-events-none select-none">
        <Image
          src="/vectors/paint-splatter.png"
          alt=""
          fill
          className="absolute top-0 right-0 w-48 pointer-events-none select-none"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-black leading-tight">
            <span className="text-[#F7F217] text-4xl md:text-6xl block">
              We Buy Sites
            </span>
            <span className="text-white text-4xl md:text-6xl block">
              Fast, Fair, No Hassle
            </span>
          </h2>
          <p className="text-white/50 mt-5 text-base leading-relaxed">
            We keep it simple: get a real offer, quick and secure payout, and
            zero runaround.
            <br />
            Most sales close in under two weeks.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Features */}
          <div className="space-y-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <h3 className="text-white font-bold text-sm">{f.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Stat card */}
          <div
            className="rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[200px]"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span
              className="text-[#F7F217] font-outfit font-black leading-none"
              style={{ fontSize: "clamp(5rem, 12vw, 7rem)" }}
            >
              20
            </span>
            <p className="text-white font-semibold text-base mt-2">
              Days Maximum
            </p>
            <p className="text-white/60 text-sm mt-1">
              We Close Most Deals{" "}
              <span className="text-[#F7F217] font-semibold">
                in 7 to 10 Days
              </span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-14">
          <a
            href="/sell"
            className="flex items-center gap-3 bg-[#1a1a1a] border border-white/10 rounded-full pl-6 pr-2 py-2 text-white font-semibold text-sm hover:bg-[#F7F217] hover:text-black hover:border-transparent transition-all duration-300 group"
          >
            Learn More
            <span className="w-8 h-8 rounded-full bg-[#F7F217] text-black flex items-center justify-center group-hover:bg-black group-hover:text-[#F7F217] transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

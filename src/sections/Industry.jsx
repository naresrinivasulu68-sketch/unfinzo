
import Card from "../components/Card";

function IndustryVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_110px_-60px_rgba(139,92,246,0.45)]">
      <div
        className="pointer-events-none absolute -left-20 -top-24 h-[340px] w-[340px] rounded-full bg-cyan-500/10 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -bottom-28 h-[360px] w-[360px] rounded-full bg-violet-600/15 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          24/7 support
        </p>
        <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
          Industry{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent">
            Standard
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Enterprise-grade reliability, compliance-ready controls, and developer-first APIs—built to power
          modern finance across industries.
        </p>
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 900 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="industry-arc" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#8b5cf6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="industry-dot" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d="M-40 330C80 210 160 250 260 190C360 130 420 60 520 70C620 80 660 140 760 130C860 120 940 40 1020 -10"
          stroke="url(#industry-arc)"
          strokeWidth="2"
          opacity="0.75"
        />
        <path
          d="M-70 360C70 260 170 280 270 230C370 180 440 120 540 120C640 120 690 170 780 165C890 160 980 80 1080 10"
          stroke="url(#industry-arc)"
          strokeWidth="1.2"
          opacity="0.55"
        />

        {[
          [180, 280, 48],
          [340, 210, 56],
          [520, 140, 60],
          [690, 170, 48],
          [780, 120, 52],
        ].map(([cx, cy, r], idx) => (
          <g key={idx} opacity="0.6">
            <circle cx={cx} cy={cy} r={r} fill="url(#industry-dot)" />
            <circle cx={cx} cy={cy} r="2" fill="#ffffff" opacity="0.35" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Industry() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[120px]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <IndustryVisual />
          </div>

          <div className="lg:col-span-5">
            <div className="grid justify-items-start gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <Card title="Banking" desc="Modern" />
              <Card title="Finance" desc="Advanced" />
              <Card title="Retail" desc="Smart" />
              <Card title="Enterprise" desc="Control" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

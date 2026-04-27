const stats = [
  {
    value: "11.5M+",
    valueClass:
      "bg-gradient-to-r from-violet-400 via-purple-500 to-blue-500 bg-clip-text text-transparent",
    label: "Transactions processed monthly",
  },
  {
    value: "99.9%",
    valueClass: "bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent",
    label: "Platform uptime and reliability",
  },
  {
    value: "70% Faster",
    isSplit: true,
    label: "Merchant onboarding with AI automation",
  },
];

function StatValue({ def }) {
  if (def.isSplit) {
    return (
      <span className="text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl">
        <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
          70%{" "}
        </span>
        <span className="text-teal-400">Faster</span>
      </span>
    );
  }
  return (
    <span
      className={`text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl ${def.valueClass}`}
    >
      {def.value}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[min(55vh,480px)] w-[min(90vw,520px)]"
        aria-hidden
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMax meet"
        >
          <defs>
            <linearGradient id="stats-arc" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            d="M 420 320 Q 200 200 40 20"
            stroke="url(#stats-arc)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-1">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:max-w-xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Your Business Pays Are Now Faster and Secure
            </h2>
            <div className="mt-8 flex justify-center sm:mt-10 lg:justify-start">
              <div className="relative w-full max-w-[min(100%,480px)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500/15 via-violet-500/10 to-cyan-500/15 blur-3xl" />
                <img
                  src="/stats-sphere.png"
                  width={960}
                  height={960}
                  alt=""
                  className="relative z-10 w-full -rotate-2 object-contain drop-shadow-[0_0_60px_rgba(139,92,246,0.2)] sm:-rotate-3"
                />
              </div>
            </div>
          </div>

          <div className="order-2 flex flex-col justify-center gap-10 sm:gap-12 md:gap-14">
            {stats.map((def) => (
              <div key={def.label}>
                <div className="min-h-0">
                  <StatValue def={def} />
                </div>
                <p className="mt-2 max-w-sm text-sm font-medium uppercase leading-relaxed tracking-[0.14em] text-white/90 sm:text-base">
                  {def.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

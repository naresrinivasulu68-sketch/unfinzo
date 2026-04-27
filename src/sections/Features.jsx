const items = [
  {
    title: "AI Banking",
    description:
      "Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.",
    stat: "3,969",
    label: "Transactions per second",
    borderClass: "border-blue-500",
    dot: "text-blue-400",
  },
  {
    title: "Payments",
    description:
      "Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.",
    stat: "1,675",
    label: "Validator nodes",
    borderClass: "border-amber-400",
    dot: "text-blue-400",
  },
  {
    title: "Payouts",
    description:
      "Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.",
    stat: "163,077,581,394",
    label: "Total transactions",
    borderClass: "border-violet-500",
    dot: "text-blue-400",
  },
  {
    title: "Merchant Onboarding",
    description:
      "Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes.",
    stat: "100%",
    label: "On-time merchant onboard",
    borderClass: "border-emerald-500",
    showDot: false,
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28" id="products">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[320px] w-[320px] rounded-full bg-purple-600/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[280px] w-[280px] rounded-full bg-emerald-500/10 blur-[90px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Our Intelligent Financial Suite
            </h2>
            <p className="mt-5 flex flex-wrap items-baseline gap-2 text-sm text-gray-400 sm:text-base">
              <span className="text-blue-400" aria-hidden>
                •
              </span>
              <span>Tools That Accelerate Every Step Of Your Financial Workflow.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10">
            {items.map(({ title, description, stat, label, borderClass, dot, showDot = true }) => (
              <article key={title} className={`border-l-2 pl-5 ${borderClass}`}>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
                <p className="mt-5 text-2xl font-bold tabular-nums text-white sm:text-3xl">
                  {showDot && (
                    <span className={`mr-1.5 text-lg sm:text-2xl ${dot ?? "text-blue-400"}`}>
                      •
                    </span>
                  )}
                  {stat}
                </p>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500">
                  {label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

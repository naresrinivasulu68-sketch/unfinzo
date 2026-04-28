
const items = [
  {
    title: "AI-Driven Decisions",
    description: "Automate approvals, verification, and financial operations.",
  },
  {
    title: "Unified Dashboard",
    description: "Manage banking, payments, and merchants in one place.",
  },
  {
    title: "Transparent Pricing",
    description: "Flexible pricing with payment options like cards and wallets.",
  },
  {
    title: "Developer-Friendly APIs",
    description: "Build, integrate, and launch faster.",
  },
  {
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance.",
  },
  {
    title: "Scalable Infrastructure",
    description: "Designed for startups to enterprises.",
  },
];

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4" {...props}>
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[110px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Why{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent">
              UzOFin
            </span>
            ?
          </h2>
          <p className="mt-5 text-pretty text-sm text-gray-400 sm:text-base">
            Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts.
            Stay updated with real-time trends, automate tasks, and extract insights from any document or URL.
            All within a sleek, futuristic design. Create more, effortlessly.
          </p>
        </div>

        <div className="mt-12">
          <div
            className={[
              "flex gap-6 overflow-x-auto pb-4",
              "snap-x snap-mandatory",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:snap-none",
            ].join(" ")}
          >
            {items.map((item) => (
              <article
                key={item.title}
                className={[
                  "group relative w-[min(86vw,360px)] shrink-0 snap-start rounded-2xl",
                  "border border-white/10 bg-white/[0.02] p-6 text-left",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
                  "transition-transform duration-200 hover:-translate-y-0.5",
                  "md:w-auto md:shrink md:snap-none",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-blue-300/80">{item.description}</p>
                  </div>
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/70 transition-colors group-hover:text-white">
                    <ArrowIcon />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

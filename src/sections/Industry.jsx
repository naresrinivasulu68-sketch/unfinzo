
const cards = [
  {
    title: "Secure by default",
    body:
      "Role-based access, audit trails, and sensible defaults so teams can ship quickly without sacrificing control.",
    accent: "violet",
  },
  {
    title: "Scales with your workflow",
    body:
      "Built for high-volume operations with predictable performance as usage grows across teams and regions.",
    accent: "cyan",
  },
  {
    title: "Fast integrations",
    body:
      "Connect to your existing tools in minutes and keep data in sync with reliable, well-structured interfaces.",
    accent: "emerald",
  },
  {
    title: "Smart automation",
    body:
      "Automate repeatable steps, reduce manual effort, and keep human-in-the-loop checkpoints where it matters.",
    accent: "amber",
  },
];

function AccentIcon({ accent = "violet" }) {
  const styles =
    accent === "cyan"
      ? "from-cyan-400/25 to-cyan-400/0 text-cyan-200"
      : accent === "emerald"
        ? "from-emerald-400/25 to-emerald-400/0 text-emerald-200"
        : accent === "amber"
          ? "from-amber-300/25 to-amber-300/0 text-amber-200"
          : "from-violet-400/25 to-violet-400/0 text-violet-200";

  return (
    <div
      className={[
        "inline-flex h-11 w-11 items-center justify-center rounded-xl",
        "bg-gradient-to-b ring-1 ring-white/10",
        styles,
      ].join(" ")}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  );
}

function IndustryStandardCard({ title, body, accent, className = "" }) {
  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10",
        "bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent",
        "px-6 py-6 text-left text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_70px_-55px_rgba(139,92,246,0.6)]",
        "backdrop-blur-xl",
        className,
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-violet-500/15 blur-[50px]"
        aria-hidden
      />
      <div className="flex items-start gap-4">
        <AccentIcon accent={accent} />
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-300/80">{body}</p>
          <a
            href="#"
            className="mt-3 inline-block text-sm font-medium text-white/75 underline decoration-white/25 underline-offset-4 hover:text-white"
          >
            Know more
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Industry() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div
        className="pointer-events-none absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-56 -top-32 h-[560px] w-[560px] rounded-full bg-violet-600/15 blur-[150px]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">24/7 support</p>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Industry{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent">
              Standard
            </span>
          </h2>
        </div>

        <div className="relative mt-12 md:mt-14">
          <div
            className={[
              "flex gap-6 overflow-x-auto pb-6",
              "snap-x snap-mandatory",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "md:overflow-visible md:snap-none md:justify-center",
            ].join(" ")}
          >
            {cards.map((c, idx) => {
              const stagger =
                idx % 3 === 1 ? "md:translate-y-8" : idx % 3 === 2 ? "md:translate-y-3" : "md:translate-y-10";
              const tint =
                c.accent === "cyan"
                  ? "from-cyan-500/10 via-white/[0.03] to-transparent"
                  : c.accent === "emerald"
                    ? "from-emerald-500/10 via-white/[0.03] to-transparent"
                    : c.accent === "amber"
                      ? "from-amber-400/10 via-white/[0.03] to-transparent"
                      : "from-violet-500/10 via-white/[0.03] to-transparent";

              return (
                <IndustryStandardCard
                  key={`${c.title}-${idx}`}
                  title={c.title}
                  body={c.body}
                  accent={c.accent}
                  className={[
                    "w-[min(86vw,360px)] shrink-0 snap-center",
                    "bg-gradient-to-b",
                    tint,
                    "transition-transform duration-300",
                    stagger,
                    "md:w-[320px]",
                  ].join(" ")}
                />
              );
            })}
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 -top-4 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

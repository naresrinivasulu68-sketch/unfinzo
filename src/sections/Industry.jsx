
const cards = [
  {
    title: "Modern & clean design",
    body:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.",
  },
  {
    title: "Easy to customize",
    body:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.",
  },
  {
    title: "Scalability & Integration",
    body:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.",
  },
  {
    title: "Smart automation",
    body:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.",
  },
  {
    title: "Easy to customize",
    body:
      "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.",
  },
];

function IndustryStandardCard({ title, body, className = "" }) {
  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10",
        "bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent",
        "px-6 py-6 text-left text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_-50px_rgba(139,92,246,0.55)]",
        "backdrop-blur-xl",
        className,
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-violet-500/15 blur-[50px]"
        aria-hidden
      />
      <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-300/80">{body}</p>
      <a href="#" className="mt-3 inline-block text-sm font-medium text-white/75 underline underline-offset-4 hover:text-white">
        Know more
      </a>
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            24/7 support
          </p>
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
              "flex gap-6 overflow-x-auto pb-4",
              "snap-x snap-mandatory",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "md:overflow-visible md:pb-0 md:snap-none md:justify-center",
            ].join(" ")}
          >
            {cards.map((c, idx) => {
              const stagger =
                idx % 3 === 1 ? "md:-translate-y-6" : idx % 3 === 2 ? "md:translate-y-4" : "md:translate-y-0";
              const tint =
                idx % 2 === 0
                  ? "from-violet-500/10 via-white/[0.03] to-transparent"
                  : "from-emerald-500/10 via-white/[0.03] to-transparent";
              return (
                <IndustryStandardCard
                  key={`${c.title}-${idx}`}
                  title={c.title}
                  body={c.body}
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

import { motion } from "framer-motion";

function EdgeArcs({ side }) {
  const isLeft = side === "left";
  const border = isLeft
    ? "border-cyan-400/25 shadow-[0_0_50px_-10px_rgba(34,211,238,0.25)]"
    : "border-violet-500/30 shadow-[0_0_50px_-10px_rgba(139,92,246,0.35)]";
  const anchor = isLeft ? "left-0" : "right-0";
  const innerTranslate = isLeft ? "-translate-x-1/2" : "translate-x-1/2";

  return (
    <div
      className={`pointer-events-none absolute top-0 h-full w-[min(42vw,520px)] overflow-hidden ${anchor}`}
      aria-hidden
    >
      <div
        className={`absolute top-1/2 ${isLeft ? "left-0" : "right-0"} -translate-y-1/2 ${innerTranslate}`}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${border} ${
              isLeft ? "bg-gradient-to-br from-cyan-500/5 to-transparent" : "bg-gradient-to-bl from-purple-500/8 to-transparent"
            }`}
            style={{
              width: `${200 + i * 72}px`,
              height: `${200 + i * 72}px`,
              opacity: 1 - i * 0.08,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function GrainOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        mixBlendMode: "overlay",
      }}
      aria-hidden
    />
  );
}

const fadeUp = { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(88,28,135,0.2),transparent)]" />
      <EdgeArcs side="left" />
      <EdgeArcs side="right" />
      <GrainOverlay />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-20 pt-24 text-center md:px-8">
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="whitespace-nowrap sm:whitespace-normal">AI-powered </span>
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-500 bg-clip-text text-transparent">
            Banking &amp; Payment Solutions
          </span>{" "}
          <span className="block sm:inline">built for Modern Businesses</span>
        </motion.h1>

        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-pretty text-base text-gray-400 md:text-lg"
        >
          UzOfin brings intelligent automation, real-time payments, and seamless financial operations
          together so you can scale without friction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_40px_-8px_rgba(139,92,246,0.5)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Start building →
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/25 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-transform duration-200 hover:scale-[1.02] hover:border-white/40 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Read docs →
          </button>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="absolute bottom-8 left-0 right-0 z-10 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-400/90 sm:text-xs"
      >
        Powering tools and integration for companies around the world
      </motion.p>
    </section>
  );
}

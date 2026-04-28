
export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black pt-20 md:pt-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            The future of your <span className="text-white/70">industry</span>{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent">
              starts here
            </span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_45px_-10px_rgba(139,92,246,0.55)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Book a demo <span aria-hidden>→</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:scale-[1.02] hover:border-white/35 hover:bg-white/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Build AI <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12 md:mt-20 md:pt-14">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <div className="text-2xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-clip-text text-transparent">
                  UzOfin
                </span>
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Connect. Control. Comply
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
                Experience the new age of payments with UzOfin and explore new growth opportunities to
                reach greater heights.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:col-span-8 md:grid-cols-4">
              <FooterColumn
                title="Products"
                links={[
                  { label: "AI Banking", href: "#products" },
                  { label: "Payments", href: "#products" },
                  { label: "Payouts", href: "#products" },
                  { label: "Merchant Onboarding", href: "#products" },
                ]}
              />
              <FooterColumn
                title="Company"
                links={[
                  { label: "About Us", href: "#" },
                  { label: "Help Center", href: "#" },
                  { label: "Contact", href: "#" },
                ]}
              />
              <FooterColumn
                title="Legal"
                links={[
                  { label: "Cookie Policy", href: "#" },
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ]}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Social
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <SocialIcon label="LinkedIn" href="#" kind="linkedin" />
                  <SocialIcon label="X" href="#" kind="x" />
                  <SocialIcon label="Instagram" href="#" kind="instagram" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 py-6 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} UzOfin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ label, href, kind }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
    >
      <span className="sr-only">{label}</span>
      <Icon kind={kind} />
    </a>
  );
}

function Icon({ kind }) {
  if (kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
        <path
          d="M6.94 8.5V18.5H3.75V8.5H6.94ZM5.34 7.16C4.32 7.16 3.5 6.34 3.5 5.33C3.5 4.32 4.32 3.5 5.34 3.5C6.35 3.5 7.17 4.32 7.17 5.33C7.17 6.34 6.35 7.16 5.34 7.16ZM20.5 18.5H17.33V13.62C17.33 12.46 17.31 10.96 15.7 10.96C14.06 10.96 13.81 12.24 13.81 13.54V18.5H10.64V8.5H13.68V9.86H13.72C14.14 9.06 15.17 8.21 16.71 8.21C19.94 8.21 20.5 10.34 20.5 13.11V18.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (kind === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
        <path
          d="M8.3 3.5h7.4C18.8 3.5 20.5 5.2 20.5 7.3v9.4c0 2.1-1.7 3.8-3.8 3.8H8.3c-2.1 0-3.8-1.7-3.8-3.8V7.3c0-2.1 1.7-3.8 3.8-3.8Zm0 1.8c-1.1 0-2 .9-2 2v9.4c0 1.1.9 2 2 2h7.4c1.1 0 2-.9 2-2V7.3c0-1.1-.9-2-2-2H8.3Zm9.1 1.4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM12 8.1a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Zm0 1.8a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // X
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
      <path
        d="M17.9 3.5h2.6l-5.7 6.5 6.7 10h-5.3l-4.1-6.3-5.5 6.3H4l6.1-7-6.4-9.5H9l3.7 5.8 5.2-5.8Zm-.9 15h1.4L8.2 5.3H6.7L17 18.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-zinc-50">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-bg opacity-70 pointer-events-none" />

      {/* Gradient blobs */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-24">
        {/* Availability badge */}
        <div
          className="anim-fade-up inline-flex items-center gap-2 mb-7 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for freelance
        </div>

        {/* Headline */}
        <h1
          className="text-5xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl"
          style={{ animation: "fade-up 0.55s cubic-bezier(0.22,1,0.36,1) 0.05s both" }}
        >
          Hi, I'm Enes.
          <br />
          I build{" "}
          <span className="text-gradient">full-stack</span>
          <br />
          web apps.
        </h1>

        {/* Description */}
        <p
          className="mt-7 max-w-lg text-lg leading-relaxed text-zinc-500"
          style={{ animation: "fade-up 0.55s cubic-bezier(0.22,1,0.36,1) 0.15s both" }}
        >
          From backend APIs to polished frontends — I turn ideas into working
          products. Recently shipped{" "}
          <span className="font-semibold text-zinc-900">NoxFrame</span>, a
          photographer booking platform.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap gap-3"
          style={{ animation: "fade-up 0.55s cubic-bezier(0.22,1,0.36,1) 0.25s both" }}
        >
          <a
            href="#projects"
            className="btn-primary group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white"
          >
            See my work
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="mailto:ansloki@gmail.com"
            className="rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:border-zinc-400 hover:shadow-sm"
          >
            Get in touch
          </a>
        </div>

        {/* Stack pills */}
        <div
          className="mt-14 flex flex-wrap items-center gap-2"
          style={{ animation: "fade-up 0.55s cubic-bezier(0.22,1,0.36,1) 0.35s both" }}
        >
          <span className="text-xs font-medium text-zinc-400 mr-1">Built with:</span>
          {["FastAPI", "PostgreSQL", "React", "Tailwind CSS", "Cloudflare R2"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-500"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;

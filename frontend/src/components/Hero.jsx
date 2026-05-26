function Hero() {
  return (
    <section id="top" className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <p className="mb-3 text-sm font-medium text-indigo-600">
        Full-stack Developer
      </p>

      <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
        Hi, I'm Enes.
        <br />
        I build full-stack web apps.
      </h1>

      <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
        From backend APIs to polished frontends — I turn ideas into working
        products. Recently shipped NoxFrame, a photographer booking platform.
      </p>

      <div className="mt-8 flex gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
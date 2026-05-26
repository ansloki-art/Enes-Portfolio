export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="mb-4 text-xs font-semibold text-violet-400 tracking-widest uppercase">
          Contact
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Have a project
          <br />
          <span className="text-gradient">in mind?</span>
        </h2>
        <p className="mt-5 max-w-md mx-auto text-base leading-relaxed text-zinc-400">
          I'm open to freelance projects and collaborations. If you have an
          idea, let's talk.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:ansloki@gmail.com"
            className="btn-primary rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900"
          >
            Email Me
          </a>
          <a
            href="https://www.fiverr.com/enesbed"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
          >
            Hire on Fiverr
          </a>
          <a
            href="https://github.com/ansloki-art"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

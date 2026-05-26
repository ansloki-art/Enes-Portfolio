export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="mb-2 text-sm font-medium text-indigo-600">Contact</p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Have a project in mind?</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          I'm open to freelance work and collaborations. Let's build something.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a href="mailto:ansloki@gmail.com" className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700">
            Email Me
          </a>
          <a href="https://www.fiverr.com/enesbed" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900">
            Hire on Fiverr
          </a>
          <a href="https://github.com/ansloki-art" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
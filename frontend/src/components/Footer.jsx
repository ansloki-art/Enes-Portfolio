export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© 2026 Enes · Indonesia</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/ansloki-art"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.fiverr.com/enesbed"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            Fiverr
          </a>
          <a
            href="mailto:ansloki@gmail.com"
            className="hover:text-zinc-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <svg
            width="28"
            height="28"
            viewBox="0 0 100 100"
            className="transition-transform duration-300 group-hover:rotate-6"
          >
            <circle cx="50" cy="50" r="50" fill="#18181b" />
            <rect x="22" y="22" width="54" height="8" rx="2" fill="white" />
            <rect x="22" y="46" width="38" height="8" rx="2" fill="white" />
            <rect x="22" y="70" width="54" height="8" rx="2" fill="white" />
            <rect x="22" y="22" width="8" height="56" rx="2" fill="white" />
          </svg>
          <span className="font-semibold tracking-tight text-zinc-900">ansloki</span>
        </a>

        <div className="flex items-center gap-6">
          <ul className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-500">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium hover:text-zinc-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-violet-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-violet-700 transition-colors"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

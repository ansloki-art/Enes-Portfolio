function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
        <svg width="32" height="32" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="#18181b"/>
          <rect x="22" y="22" width="54" height="8" rx="2" fill="white"/>
          <rect x="22" y="46" width="38" height="8" rx="2" fill="white"/>
          <rect x="22" y="70" width="54" height="8" rx="2" fill="white"/>
          <rect x="22" y="22" width="8" height="56" rx="2" fill="white"/>
        </svg>
        <span className="font-semibold tracking-tight text-zinc-900">ansloki</span>
      </a>
        <ul className="flex gap-6 text-sm text-zinc-600">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
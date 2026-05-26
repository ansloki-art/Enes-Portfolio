const stats = [
  { icon: "🎯", value: "Self-taught", label: "No CS degree" },
  { icon: "⏱", value: "10 months", label: "Building solo" },
  { icon: "🚀", value: "2+ shipped", label: "Real products" },
];

const skills = [
  {
    label: "Backend",
    items: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT Auth"],
  },
  {
    label: "Frontend",
    items: ["React", "Vite", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Tools & Infra",
    items: ["Cloudflare R2", "boto3", "Git & GitHub"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-zinc-200 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p className="mb-2 text-xs font-semibold text-violet-600 tracking-widest uppercase">
          About
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Who I am
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500">
          I'm a self-taught full-stack developer from{" "}
          <span className="font-semibold text-zinc-900">Indonesia</span>, building
          web apps solo for the past 10 months. I handle everything — from
          database schema to pixel-polished frontends — and I ship things that
          actually work.
        </p>

        {/* Stat cards */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-sm">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-center"
            >
              <div className="text-2xl mb-1.5">{stat.icon}</div>
              <div className="text-sm font-bold text-zinc-900">{stat.value}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-12 space-y-8">
          {skills.map((group) => (
            <div key={group.label}>
              <p className="mb-3 text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="pill rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

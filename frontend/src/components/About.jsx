export default function About() {
  return (
    <section id="about" className="py-20 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6">
        <p className="mb-2 text-sm font-medium text-indigo-600">About</p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Who I am</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600">
          I'm a self-taught full-stack developer from Indonesia. For the past ~10 months I've been building web apps solo — designing the backend, the database, and the frontend. I like turning rough ideas into things that actually ship.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <p className="mb-3 text-sm font-medium text-zinc-900">Backend</p>
            <div className="flex flex-wrap gap-2">
              {["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT Auth"].map((skill) => (
                <span key={skill} className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-zinc-900">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Vite", "JavaScript", "Tailwind CSS"].map((skill) => (
                <span key={skill} className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-zinc-900">Tools & Infra</p>
            <div className="flex flex-wrap gap-2">
              {["Cloudflare R2", "boto3", "Git & GitHub"].map((skill) => (
                <span key={skill} className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
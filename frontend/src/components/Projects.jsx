import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-zinc-200 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6">
        <p className="mb-2 text-xs font-semibold text-violet-600 tracking-widest uppercase">
          Projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          What I've built
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="card-lift group border border-zinc-200 rounded-2xl overflow-hidden bg-white flex flex-col"
            >
              {/* Screenshot */}
              <div className="relative h-52 overflow-hidden bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                {i === 0 && (
                  <span className="absolute top-3 left-3 rounded-full bg-violet-600 px-2.5 py-0.5 text-xs font-bold text-white">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-zinc-900">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-violet-600">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-zinc-50 border border-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex gap-2.5">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary flex-1 text-center rounded-lg bg-zinc-900 py-2 text-sm font-semibold text-white"
                    >
                      Live Site
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center rounded-lg border border-zinc-200 py-2 text-sm font-semibold text-zinc-600 hover:border-zinc-400 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

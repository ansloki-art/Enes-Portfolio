import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6">
        <p className="mb-2 text-sm font-medium text-indigo-600">Projects</p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">What I've built</h2>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <div key={project.title} className="border border-zinc-200 rounded-lg overflow-hidden flex flex-col sm:flex-row">
              
              {/* Left — text content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
                  <p className="mt-1 text-sm text-indigo-600">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700">
                      Live Site
                    </a>
                  )}
                  <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900">
                    View Code
                  </a>
                </div>
              </div>

              {/* Right — screenshot */}
              <div className="w-full sm:w-72 h-48 sm:h-auto overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
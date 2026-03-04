import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./config/projects";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-bg pt-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 flex justify-center">
        <ShineBorder
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-base-border bg-base-bg px-10 py-24 md:px-20 md:shadow-xl"
          color={["#00B140", "#FF6B5A"]}
          borderRadius={12}
        >
          <h1 className="text-hero font-bold text-base-text mb-6 text-center">
            Software with something to say.
          </h1>
          <p className="text-xl text-base-text/70 max-w-2xl mx-auto leading-relaxed text-center">
            A collection of experiments, tools, and projects exploring the
            intersection of technology and creativity.
          </p>
        </ShineBorder>
      </section>

      {/* Projects Section - Single Column Gallery */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20 space-y-30">
        {projects.map((project) => (
          <div key={project.id} id={project.id}>
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              link={project.link}
              images={project.images}
              imagePlaceholder={project.imagePlaceholder}
            />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-16 text-center border-t border-base-border mt-30">
        <p className="text-sm text-base-text/50">
          Built with Next.js · Deployed on Vercel
        </p>
      </footer>
    </main>
  );
}

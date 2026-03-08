import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./config/projects";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-bg pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10 flex justify-center">
        <ShineBorder
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-base-border bg-base-bg px-6 py-14 sm:px-10 sm:py-20 md:px-20 md:py-24 md:shadow-xl"
          color={["#00B140", "#FF6B5A"]}
          borderRadius={12}
        >
          <h1 className="text-3xl sm:text-5xl md:text-hero font-bold text-base-text mb-4 md:mb-6 text-center">
            The future of software is random.
          </h1>
          <p className="text-base md:text-xl text-base-text/70 max-w-2xl mx-auto leading-relaxed text-center">
            A portfolio of tools from a one-person team with ADHD, a long
            backlog of ideas & a Claude Max subscription.
          </p>
        </ShineBorder>
      </section>

      {/* Projects Section - Single Column Gallery */}
      <section
        id="work"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-20 space-y-16 md:space-y-30"
      >
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
    </main>
  );
}

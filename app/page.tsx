import { ProjectCard } from "./components/ProjectCard";
import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Main Content */}
      <main className="min-h-screen bg-base-bg pt-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-hero font-bold text-base-text mb-6">
            Software with something to say.
          </h1>
          <p className="text-xl text-base-text/70 max-w-2xl mx-auto leading-relaxed">
            A collection of experiments, tools, and projects exploring the intersection of technology and creativity.
          </p>
        </section>

        {/* Projects Section - Single Column Gallery */}
        <section id="work" className="max-w-4xl mx-auto px-6 py-20 space-y-30">
          {/* Project: Taru */}
          <div id="taru">
            <ProjectCard
              title="Taru"
              subtitle="樽"
              description="An AI-powered content processing system that transforms scattered information into structured knowledge. Automated RSS digests, podcast production pipelines, and persistent memory extraction that learns from your workflow."
              link="/projects/taru"
              tags={["AI", "Python", "Next.js"]}
              status="active"
              imagePlaceholder="bg-gradient-to-br from-brand-green/20 to-brand-coral/20"
            />
          </div>

        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-16 text-center border-t border-base-border mt-30">
          <p className="text-sm text-base-text/50">
            Built with Next.js · Deployed on Vercel
          </p>
        </footer>
      </main>
    </>
  );
}

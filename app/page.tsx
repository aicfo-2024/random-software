import { ProjectCard } from "./components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Fixed Minimal Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-base-bg/80 backdrop-blur-sm border-b border-base-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-semibold text-base-text hover:text-brand-green"
          >
            Random Software
          </a>
          <div className="flex gap-8 text-sm">
            <a
              href="/build"
              className="text-base-text hover:text-brand-green relative group"
            >
              Build
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-coral group-hover:w-full transition-all duration-300"></span>
            </a>
            <div className="relative group">
              <button className="text-base-text hover:text-brand-green relative">
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-coral group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-base-bg border border-base-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a
                    href="#taru"
                    className="block px-4 py-2 text-base-text hover:bg-brand-green/10 hover:text-brand-green"
                  >
                    Taru
                  </a>
                  <a
                    href="#project-two"
                    className="block px-4 py-2 text-base-text hover:bg-brand-green/10 hover:text-brand-green"
                  >
                    Project Two
                  </a>
                  <a
                    href="#project-three"
                    className="block px-4 py-2 text-base-text hover:bg-brand-green/10 hover:text-brand-green"
                  >
                    Project Three
                  </a>
                </div>
              </div>
            </div>
            <a
              href="/manifesto"
              className="text-base-text hover:text-brand-green relative group"
            >
              Manifesto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-coral group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </nav>
      </header>

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
              link="https://taru.random-software.com"
              tags={["AI", "Python", "Next.js"]}
              status="active"
              imagePlaceholder="bg-gradient-to-br from-brand-green/20 to-brand-coral/20"
            />
          </div>

          {/* Placeholder Projects */}
          <div id="project-two">
            <ProjectCard
              title="Project Two"
              subtitle="Coming Soon"
              description="An exploration of data visualization and interactive storytelling. Building tools that help people understand complex systems through elegant, intuitive interfaces."
              link="#"
              tags={["Data Viz", "React", "D3.js"]}
              status="planned"
              imagePlaceholder="bg-gradient-to-br from-brand-coral/20 to-brand-green/20"
            />
          </div>

          <div id="project-three">
            <ProjectCard
              title="Project Three"
              subtitle="In Development"
              description="Experimenting with real-time collaboration tools that feel natural and unobtrusive. Focusing on flow state and reducing cognitive overhead in team workflows."
              link="#"
              tags={["WebRTC", "TypeScript"]}
              status="planned"
              imagePlaceholder="bg-gradient-to-br from-base-text/10 to-brand-green/20"
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

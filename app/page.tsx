export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Random Software
          </h1>
          <p className="text-xl text-slate-300">
            A collection of experiments, tools, and projects
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project Card: Tekka */}
          <ProjectCard
            title="Tekka (鉄火)"
            description="AI-powered content processing system. Automated RSS digests, podcast production pipeline, and persistent memory extraction."
            link="https://tekka.random-software.com"
            tags={["AI", "Python", "Next.js"]}
            status="active"
          />

          {/* Placeholder for future projects */}
          <ProjectCard
            title="Project 2"
            description="Coming soon..."
            link="#"
            tags={["TBD"]}
            status="planned"
          />

          <ProjectCard
            title="Project 3"
            description="Coming soon..."
            link="#"
            tags={["TBD"]}
            status="planned"
          />
        </div>

        {/* Footer */}
        <footer className="text-center mt-20 text-slate-400">
          <p>Built with Next.js · Deployed on Vercel</p>
        </footer>
      </div>
    </main>
  );
}

// Project Card Component
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  status: "active" | "planned" | "archived";
}

function ProjectCard({ title, description, link, tags, status }: ProjectCardProps) {
  const statusColors = {
    active: "bg-green-500/20 text-green-300 border-green-500/50",
    planned: "bg-yellow-500/20 text-yellow-300 border-yellow-500/50",
    archived: "bg-slate-500/20 text-slate-300 border-slate-500/50",
  };

  return (
    <a
      href={link}
      className="block p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-500 transition-all hover:scale-105"
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs px-3 py-1 rounded-full border ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-slate-300 mb-4 line-clamp-3">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

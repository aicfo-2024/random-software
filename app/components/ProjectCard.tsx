"use client";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  tags: string[];
  status: "active" | "planned" | "archived";
  imagePlaceholder: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  link,
  tags,
  status,
  imagePlaceholder
}: ProjectCardProps) {
  const statusConfig = {
    active: {
      color: "bg-brand-green/20 text-brand-green border-brand-green/50",
      label: "Active"
    },
    planned: {
      color: "bg-brand-coral/20 text-brand-coral border-brand-coral/50",
      label: "Planned"
    },
    archived: {
      color: "bg-base-text/10 text-base-text/50 border-base-text/30",
      label: "Archived"
    },
  };

  const isClickable = link !== "#";

  return (
    <article className="group">
      <a
        href={link}
        className={`block ${isClickable ? "cursor-pointer" : "cursor-default"}`}
        onClick={(e) => !isClickable && e.preventDefault()}
      >
        {/* Large Image Placeholder */}
        <div
          className={`
            w-full aspect-[16/9] rounded-lg mb-8
            ${imagePlaceholder}
            flex items-center justify-center
            ${isClickable ? "group-hover:scale-[1.02] group-hover:shadow-xl" : ""}
            overflow-hidden
          `}
        >
          <span className="text-6xl text-base-text/10">
            {title.slice(0, 1)}
          </span>
        </div>

        {/* Status Badge */}
        <div className="mb-4">
          <span className={`
            inline-block text-xs px-3 py-1 rounded-full border
            ${statusConfig[status].color}
            font-medium uppercase tracking-wider
          `}>
            {statusConfig[status].label}
          </span>
        </div>

        {/* Project Title */}
        <h2 className="text-display font-bold text-base-text mb-2">
          {title}
          {subtitle && (
            <span className="text-base-text/40 ml-4 text-3xl">
              {subtitle}
            </span>
          )}
        </h2>

        {/* Philosophical Description */}
        <p className="text-lg text-base-text/70 leading-relaxed mb-6 max-w-2xl">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 bg-base-bg border border-base-border text-base-text/60 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Link (only for active projects) */}
        {isClickable && (
          <div className="flex items-center gap-2 text-brand-green font-medium group-hover:gap-4">
            <span>View Project</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        )}
      </a>
    </article>
  );
}

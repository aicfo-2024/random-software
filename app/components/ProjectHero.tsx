import Image from "next/image";

interface ProjectHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  status: "active" | "planned" | "archived";
  tags: string[];
  imageSrc?: string;
  imageAlt?: string;
  gradient?: string;
}

export function ProjectHero({
  title,
  subtitle,
  description,
  status,
  tags,
  imageSrc,
  imageAlt = "",
  gradient = "bg-gradient-to-br from-brand-green/20 to-brand-coral/20",
}: ProjectHeroProps) {
  const statusConfig = {
    active: {
      color: "bg-brand-green/20 text-brand-green border-brand-green/50",
      label: "Active",
    },
    planned: {
      color: "bg-brand-coral/20 text-brand-coral border-brand-coral/50",
      label: "Planned",
    },
    archived: {
      color: "bg-base-text/10 text-base-text/50 border-base-text/30",
      label: "Archived",
    },
  };

  return (
    <div className="mb-16">
      {/* Hero Image */}
      <div
        className={`w-full aspect-[16/9] rounded-lg mb-8 ${gradient} flex items-center justify-center overflow-hidden relative`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        ) : (
          <span className="text-6xl text-base-text/10">{title.slice(0, 1)}</span>
        )}

        {/* Status Badge - Top Right Corner */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-block text-xs px-3 py-1 rounded-full border ${statusConfig[status].color} font-medium uppercase tracking-wider`}
          >
            {statusConfig[status].label}
          </span>
        </div>
      </div>

      {/* Title & Subtitle */}
      <h1 className="text-display font-bold text-base-text mb-2">
        {title}
        {subtitle && (
          <span className="text-base-text/40 ml-4 text-3xl">{subtitle}</span>
        )}
      </h1>

      {/* Description */}
      <p className="text-xl text-base-text/70 leading-relaxed mb-6 max-w-2xl">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-sm px-3 py-1 bg-base-bg border border-base-border text-base-text/60 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { ProjectCarousel } from "./ProjectCarousel";

interface CarouselImage {
  src: string;
  alt: string;
  label: string;
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  images: CarouselImage[];
  imagePlaceholder?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  link,
  images,
  imagePlaceholder,
}: ProjectCardProps) {
  const isClickable = link !== "#";

  return (
    <article className="rounded-lg border border-base-border bg-base-bg overflow-hidden md:shadow-xl">
      <ProjectCarousel
        images={images}
        title={title}
        gradientFallback={imagePlaceholder}
      />

      <div className="px-5 py-6 sm:px-8 sm:py-8 md:px-10">
        <h2 className="text-2xl sm:text-4xl md:text-display font-bold text-base-text mb-2">
          {title}
          {subtitle && (
            <span className="text-base-text/40 ml-2 sm:ml-4 text-xl sm:text-3xl">
              {subtitle}
            </span>
          )}
        </h2>

        <p className="text-lg text-base-text/70 leading-relaxed mb-6 max-w-2xl">
          {description}
        </p>

        {isClickable && (
          <a
            href={link}
            className="inline-flex items-center gap-2 text-brand-green font-medium hover:gap-4 transition-all"
          >
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
          </a>
        )}
      </div>
    </article>
  );
}

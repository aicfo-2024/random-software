"use client";

import { ProjectCarousel } from "./ProjectCarousel";

interface CarouselImage {
  src: string;
  alt: string;
  label: string;
}

interface ProjectHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  images?: CarouselImage[];
  gradient?: string;
}

export function ProjectHero({
  title,
  subtitle,
  description,
  images = [],
  gradient = "bg-gradient-to-br from-brand-green/20 to-brand-coral/20",
}: ProjectHeroProps) {
  return (
    <div className="mb-16 rounded-lg border border-base-border bg-base-bg overflow-hidden md:shadow-xl">
      <ProjectCarousel
        images={images}
        title={title}
        gradientFallback={gradient}
      />

      <div className="px-8 py-8 md:px-10">
        <h1 className="text-display font-bold text-base-text mb-2">
          {title}
          {subtitle && (
            <span className="text-base-text/40 ml-4 text-3xl">{subtitle}</span>
          )}
        </h1>

        <p className="text-xl text-base-text/70 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}

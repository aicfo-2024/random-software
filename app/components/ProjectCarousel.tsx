"use client";

import Image from "next/image";
import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from "@/components/ui/progressive-carousel";

interface CarouselImage {
  src: string;
  alt: string;
  label: string;
}

interface ProjectCarouselProps {
  images: CarouselImage[];
  title: string;
  gradientFallback?: string;
}

export function ProjectCarousel({
  images,
  title,
  gradientFallback = "bg-gradient-to-br from-brand-green/20 to-brand-coral/20",
}: ProjectCarouselProps) {
  if (images.length === 0) {
    return (
      <div
        className={`
          w-full aspect-[16/9] rounded-lg
          ${gradientFallback}
          flex items-center justify-center
          overflow-hidden
        `}
      >
        <span className="text-6xl text-base-text/10">{title.slice(0, 1)}</span>
      </div>
    );
  }

  const firstSlider = images[0].label;

  return (
    <ProgressSlider
      activeSlider={firstSlider}
      duration={6000}
      fastDuration={400}
      className="w-full"
    >
      <SliderContent>
        {images.map((image) => (
          <SliderWrapper key={image.label} value={image.label}>
            <Image
              className="rounded-lg w-full aspect-[16/9] object-cover"
              src={image.src}
              width={1920}
              height={1080}
              alt={image.alt}
            />
          </SliderWrapper>
        ))}
      </SliderContent>

      {images.length > 1 && (
        <SliderBtnGroup
          className={`hidden md:grid absolute bottom-0 left-0 right-0 h-fit bg-base-bg/60 backdrop-blur-md overflow-hidden rounded-b-lg border-t border-base-border/50 grid-cols-${images.length}`}
        >
          {images.map((image) => (
            <SliderBtn
              key={image.label}
              value={image.label}
              className="text-left cursor-pointer p-3 border-r border-base-border/30 last:border-r-0 transition-opacity"
              progressBarClass="bg-brand-green/10 h-full"
            >
              <h3 className="relative px-3 py-0.5 rounded-full w-fit bg-base-text text-base-bg text-xs font-medium mb-1.5">
                {image.label}
              </h3>
              <p className="text-xs text-base-text/60 font-medium line-clamp-1">
                {image.alt}
              </p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      )}
    </ProgressSlider>
  );
}

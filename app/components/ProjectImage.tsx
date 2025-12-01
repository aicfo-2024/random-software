import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  layout?: "default" | "full-bleed" | "side-by-side";
  aspectRatio?: "16/9" | "4/3" | "1/1" | "auto";
}

export function ProjectImage({
  src,
  alt,
  caption,
  layout = "default",
  aspectRatio = "16/9",
}: ProjectImageProps) {
  const aspectClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    auto: "",
  };

  const layoutClasses = {
    default: "max-w-3xl mx-auto",
    "full-bleed": "w-full",
    "side-by-side": "max-w-xl",
  };

  return (
    <figure className={`my-12 ${layoutClasses[layout]}`}>
      <div
        className={`relative ${aspectClasses[aspectRatio]} w-full border border-base-border rounded-lg overflow-hidden bg-base-bg`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-base-text/60 mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

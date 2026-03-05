import { type ProjectStatus } from "./status";

interface CarouselImage {
  src: string;
  alt: string;
  label: string;
}

interface ProjectConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  tags: string[];
  status: ProjectStatus;
  images: CarouselImage[];
  imagePlaceholder: string;
  navLabel: string;
}

export const projects: ProjectConfig[] = [
  {
    id: "taru",
    title: "Taru",
    subtitle: "足",
    description:
      "An AI research assistant that helps you internalize the podcasts, articles, and newsletters you already consume — turning passive listening into a searchable, connected record of your own thinking.",
    link: "/projects/taru",
    tags: ["AI", "Python", "FastAPI", "Next.js"],
    status: "active",
    images: [
      {
        src: "/images/projects/taru/1-garden.png",
        alt: "Explore your knowledge garden",
        label: "Garden",
      },
      {
        src: "/images/projects/taru/2-writing.png",
        alt: "AI researcher copilot",
        label: "Writing",
      },
      {
        src: "/images/projects/taru/3-history.png",
        alt: "Review recent content for insights",
        label: "History",
      },
    ],
    imagePlaceholder: "bg-gradient-to-br from-brand-green/20 to-brand-coral/20",
    navLabel: "Taru",
  },
];

export function getGalleryItems(): { href: string; label: string }[] {
  return projects.map((project) => ({
    href: project.link,
    label: project.navLabel,
  }));
}

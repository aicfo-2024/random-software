
# Project Gallery Detail Pages Framework

## Overview
Create a consistent framework for project detail pages on RandomSoftware.com. Each project page should feel like viewing a piece in an art gallery - clean, spacious, focused on the work and the creator's perspective.

## Brand Guidelines

### Visual Identity
- **Color Palette**: 
  - Austin FC Green (`#00B140`) for accents and CTAs
  - Warm Coral (`#FF6B5A`) for secondary highlights
  - Off-white background (`#FAFAFA`)
  - Dark gray text (`#2C2C2C`)
- **Philosophy**: 90% neutral space, 10% accent colors
- **Aesthetic**: Gallery-like with generous white space, minimal design

### Typography
- Use clear hierarchy with heading levels
- Ample line-height for readability
- Keep prose paragraphs well-spaced

## Content Structure

Each project page should have exactly **3 sections**:

### 1. Origin Story
- Why the project was built
- What frustrations or gaps in existing tools led to its creation
- The "I had something to say" moment
- What the creator believed should exist that didn't
- **Tone**: Personal, authentic, story-driven

### 2. Design Principles
- Conscious decisions made during creation
- Trade-offs embraced
- What was optimized for (and against)
- **Format**: Can be bullet points or short statements
- **Examples**:
  - "Human agency over automation"
  - "Cultivation over collection"
  - "Intentional friction instead of frictionless capture"
- **Tone**: Clear, opinionated, philosophical

### 3. What It Does
- Practical features and capabilities
- Screenshots or GIFs showing the product in action
- Links to try it, view source, or learn more
- **Tone**: Straightforward, functional

## Technical Implementation

### Directory Structure
```
app/
└── projects/
    ├── taru/
    │   └── page.mdx
    ├── mean-machine/
    │   └── page.mdx
    └── [project-name]/
        └── page.mdx
```

### MDX Template
Create a reusable template at `app/projects/_template/page.mdx`:

```mdx
import { MDXLayout } from "@/components/MDXLayout";

export default function ProjectPage({ children }) {
  return <MDXLayout>{children}</MDXLayout>;
}

# Project Name

<div className="text-lg text-base-text/70 mb-12">
  One-line description of what this project says or does
</div>

## Origin Story

Write the personal story here. Why did this need to exist?

Multiple paragraphs are fine. Use natural prose.

## Design Principles

**Principle name** - Explanation of this principle and the trade-off it represents.

**Another principle** - More explanation.

**Third principle** - Continue the pattern.

## What It Does

Describe the practical features here.

<div className="my-8 border border-base-border rounded-lg overflow-hidden">
  <img src="/images/projects/project-name/screenshot.png" alt="Screenshot description" />
</div>

[Try it](https://link-to-project.com) · [View source](https://github.com/...)
```

### Component Suggestions

Create these reusable components in `components/projects/`:

#### 1. ProjectHero Component
```typescript
// components/projects/ProjectHero.tsx
interface ProjectHeroProps {
  title: string;
  tagline: string;
  year?: string;
}

export function ProjectHero({ title, tagline, year }: ProjectHeroProps) {
  return (
    <div className="mb-16">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      {year && <p className="text-sm text-base-text/50 mb-4">{year}</p>}
      <p className="text-xl text-base-text/70 max-w-2xl">{tagline}</p>
    </div>
  );
}
```

#### 2. DesignPrinciple Component
```typescript
// components/projects/DesignPrinciple.tsx
interface DesignPrincipleProps {
  title: string;
  description: string;
}

export function DesignPrinciple({ title, description }: DesignPrincipleProps) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-brand-green mb-2">{title}</h3>
      <p className="text-base-text/80">{description}</p>
    </div>
  );
}
```

#### 3. ProjectImage Component
```typescript
// components/projects/ProjectImage.tsx
interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ProjectImage({ src, alt, caption }: ProjectImageProps) {
  return (
    <figure className="my-12">
      <div className="border border-base-border rounded-lg overflow-hidden bg-white">
        <img src={src} alt={alt} className="w-full" />
      </div>
      {caption && (
        <figcaption className="text-sm text-base-text/50 mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
```

#### 4. ProjectLinks Component
```typescript
// components/projects/ProjectLinks.tsx
interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectLinksProps {
  links: ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-4 my-8">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="inline-flex items-center px-6 py-3 bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label} →
        </a>
      ))}
    </div>
  );
}
```

### Styling Guidelines

Add these to your `mdx-components.tsx` or global CSS:

```css
/* Project page specific styles */
.project-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.project-page h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #2C2C2C;
  margin-bottom: 1rem;
}

.project-page h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #2C2C2C;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #00B140;
  padding-bottom: 0.5rem;
}

.project-page h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #00B140;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.project-page p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #2C2C2C;
}

.project-page a {
  color: #00B140;
  text-decoration: underline;
  text-decoration-color: #00B140;
  text-underline-offset: 3px;
}

.project-page a:hover {
  color: #FF6B5A;
  text-decoration-color: #FF6B5A;
}

.project-page img {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Gallery Index Page

Update the main projects index page (`app/projects/page.tsx` or `page.mdx`) to list all projects:

```tsx
export default function ProjectsPage() {
  const projects = [
    {
      name: "Taru",
      tagline: "Knowledge management as cultivation, not collection",
      href: "/projects/taru",
      year: "2025"
    },
    {
      name: "Mean Machine",
      tagline: "Automated financial analysis with personality",
      href: "/projects/mean-machine",
      year: "2025"
    }
    // Add more projects
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-xl text-base-text/70 mb-16 max-w-2xl">
        Software with something to say. Each project represents a worldview
        about how something should work.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            className="group p-8 border border-base-border rounded-lg hover:border-brand-green transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-brand-green transition-colors">
              {project.name}
            </h2>
            <p className="text-base-text/70 mb-4">{project.tagline}</p>
            <span className="text-sm text-base-text/50">{project.year}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
```

## Content Writing Guidelines

### Origin Story
- **Length**: 2-4 paragraphs
- **Voice**: First person ("I built this because...")
- **Focus**: The frustration → the belief → the decision to build
- **Avoid**: Marketing speak, technical jargon

### Design Principles
- **Format**: 3-5 principles, each with a bolded title and 1-2 sentence explanation
- **Voice**: Confident, opinionated
- **Focus**: The trade-offs and conscious decisions
- **Avoid**: Generic principles that could apply to any product

### What It Does
- **Length**: 2-3 paragraphs + visuals
- **Voice**: Clear, straightforward
- **Focus**: Practical capabilities and how to access it
- **Include**: Screenshots, GIFs, or video demos
- **Avoid**: Feature lists without context

## Next Steps

1. Create the component files in `components/projects/`
2. Add project-specific styles to `mdx-components.tsx`
3. Create the Taru project page using this framework
4. Test the layout and spacing
5. Create additional project pages following the same pattern
6. Update the main projects index page

## Notes for Claude Code

- Maintain generous spacing between sections (4-6rem)
- Keep the gallery aesthetic - let the content breathe
- Use the brand colors sparingly and intentionally
- Ensure all images are optimized and properly sized
- Test responsiveness on mobile devices
- Keep the focus on the story and philosophy, not marketing

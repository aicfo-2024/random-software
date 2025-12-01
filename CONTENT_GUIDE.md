# Content Management Guide

This project uses MDX for managing written content. MDX allows you to write markdown with embedded React components.

## Directory Structure

```
app/
├── manifesto/
│   └── page.mdx          # Manifesto essay
├── projects/
│   └── taru/
│       └── page.mdx      # Taru project page
├── components/
│   └── MDXLayout.tsx     # Shared layout for MDX pages
content/                  # Optional: Store standalone MDX files here
└── projects/             # Optional: Project-specific content
```

## Creating a New Content Page

### 1. Create the directory and file

```bash
mkdir -p app/your-page
touch app/your-page/page.mdx
```

### 2. Add the MDX layout

Every MDX page needs to import and use the MDXLayout:

```mdx
import { MDXLayout } from "../components/MDXLayout";

export default function YourPage({ children }) {
  return <MDXLayout>{children}</MDXLayout>;
}

# Your Page Title

Your content here...
```

### 3. Write your content

MDX supports all standard markdown:

- **Headings**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[text](url)`
- **Lists**: `- item` or `1. item`
- **Code**: `` `inline` `` or ` ```language ` for blocks
- **Quotes**: `> quote text`

### 4. Add React components (optional)

You can embed JSX directly in your MDX:

```mdx
# My Page

Regular markdown content here.

<div className="bg-brand-green/10 p-6 rounded-lg">
  <p className="text-brand-green">Custom styled component!</p>
</div>

More markdown here.
```

## Styling

MDX components automatically use the styles defined in `mdx-components.tsx`. Available classes:

- `text-base-text` - Main text color
- `text-brand-green` - Brand green
- `text-brand-coral` - Brand coral
- `bg-base-bg` - Background color
- `border-base-border` - Border color

## Creating a New Project Page

Project pages follow a specific 3-section framework: **Origin Story → Design Principles → What It Does**

### Quick Start

1. **Create the project directory**:
   ```bash
   mkdir -p app/projects/your-project-name
   ```

2. **Create the layout file** (`app/projects/your-project-name/layout.tsx`):
   ```tsx
   import { MDXLayout } from "@/app/components/MDXLayout";
   import type { Metadata } from "next";

   export const metadata: Metadata = {
     title: "Your Project - Random Software",
     description: "One-line description of your project",
   };

   export default function YourProjectLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return <MDXLayout>{children}</MDXLayout>;
   }
   ```

3. **Create the page file** (`app/projects/your-project-name/page.mdx`) - use the template below

4. **Add project images** to `public/images/projects/your-project-name/`

### Project Page Template

Copy this template to create a new project page:

```mdx
import { ProjectHero } from "@/app/components/ProjectHero";
import { DesignPrinciple } from "@/app/components/DesignPrinciple";
import { ProjectImage } from "@/app/components/ProjectImage";
import { ProjectLinks } from "@/app/components/ProjectLinks";

<ProjectHero
  title="Project Name"
  subtitle="Optional Subtitle"
  description="A 1-2 sentence philosophical description of what this project says or does."
  status="active"
  tags={["Technology", "Stack", "Keywords"]}
  gradient="from-brand-green/20 to-brand-coral/20"
/>

<ProjectLinks
  links={[
    { label: "Launch Project", url: "https://your-project.com", type: "demo" },
    { label: "View Source", url: "https://github.com/...", type: "github" },
  ]}
  layout="horizontal"
/>

## Origin Story

Write 2-4 paragraphs about:
- **Why you built this** - What frustration or gap led to its creation?
- **The "aha" moment** - When did you realize this needed to exist?
- **What you believed** - What should exist in the world that didn't?

Use first-person voice ("I built this because..."). Be authentic and story-driven.

## Design Principles

<div className="grid md:grid-cols-2 gap-6 my-12">
  <DesignPrinciple
    icon="🎯"
    title="First Principle"
    description="Explain the conscious decision you made. What trade-off did you embrace? What did you optimize for (and against)?"
  />

  <DesignPrinciple
    icon="⚡"
    title="Second Principle"
    description="Another core belief that shaped how you built this project."
  />

  <DesignPrinciple
    icon="🧠"
    title="Third Principle"
    description="What makes your approach different from existing solutions?"
  />

  <DesignPrinciple
    icon="🔗"
    title="Fourth Principle"
    description="Optional: Add 3-5 principles total. Be opinionated and clear."
    variant="highlighted"
  />
</div>

## What It Does

### Feature Section 1

Describe practical capabilities here. Keep it straightforward and functional.

<ProjectImage
  src="/images/projects/your-project/screenshot1.png"
  alt="Description of what the screenshot shows"
  caption="Optional caption explaining the image"
/>

### Feature Section 2

Show the product in action. Use multiple subsections if needed.

### Feature Section 3

Explain how users interact with or benefit from this project.

## Try It Out

<ProjectLinks
  links={[
    { label: "Launch Project", url: "https://your-project.com", type: "demo" },
    { label: "View Docs", url: "https://docs.your-project.com", type: "docs" },
    { label: "GitHub", url: "https://github.com/...", type: "github" },
  ]}
  layout="horizontal"
/>

*Built with [Tech Stack] · Last updated: [Date]*
```

### Available Components

#### ProjectHero
Full-width hero section with image, status badge, and tags.

**Props**:
- `title` (required): Project name
- `subtitle` (optional): Secondary text (e.g., Japanese characters)
- `description` (required): 1-2 sentence description
- `status` (required): "active" | "planned" | "archived"
- `tags` (required): Array of technology/category tags
- `imageSrc` (optional): Path to hero image (falls back to gradient)
- `imageAlt` (optional): Alt text for image
- `gradient` (optional): Tailwind gradient classes for fallback

**Example**:
```tsx
<ProjectHero
  title="Taru"
  subtitle="樽"
  description="AI-powered content processing"
  status="active"
  tags={["AI", "Python", "Next.js"]}
  gradient="from-brand-green/20 to-brand-coral/20"
/>
```

**Note**: Use the separate `<ProjectLinks>` component after the hero for CTAs.

#### DesignPrinciple
Individual principle card for the Design Principles section.

**Props**:
- `icon` (optional): Emoji or React element
- `title` (required): Principle name
- `description` (required): 1-2 sentence explanation
- `variant` (optional): "default" | "highlighted" (adds coral border)

**Example**:
```tsx
<DesignPrinciple
  icon="🎯"
  title="Human Agency Over Automation"
  description="We believe tools should augment, not replace, human decision-making."
/>
```

#### ProjectImage
Responsive image wrapper with caption support.

**Props**:
- `src` (required): Path to image (e.g., `/images/projects/taru/screenshot.png`)
- `alt` (required): Accessibility description
- `caption` (optional): Text displayed below image
- `layout` (optional): "default" | "full-bleed" | "side-by-side"
- `aspectRatio` (optional): "16/9" | "4/3" | "1/1" | "auto"

**Example**:
```tsx
<ProjectImage
  src="/images/projects/taru/dashboard.png"
  alt="Taru dashboard showing RSS digest"
  caption="Daily digest with AI summaries"
  aspectRatio="16/9"
/>
```

#### ProjectLinks
Collection of external links with icons.

**Props**:
- `links` (required): Array of `{ label, url, type }` objects
  - `type` options: "github" | "demo" | "docs" | "custom"
- `layout` (optional): "horizontal" | "vertical"

**Example**:
```tsx
<ProjectLinks
  links={[
    { label: "Live Demo", url: "https://...", type: "demo" },
    { label: "GitHub", url: "https://github.com/...", type: "github" },
  ]}
/>
```

### Image Guidelines

1. **Directory structure**: Store images at `public/images/projects/[project-name]/`
2. **Naming convention**: Use descriptive names (`hero.png`, `dashboard-view.png`, `workflow-diagram.png`)
3. **Formats**: PNG for screenshots, JPG for photos, SVG for diagrams
4. **Sizes**: Aim for ~1200px width for retina displays (Next.js will optimize)
5. **Optimization**: Next.js automatically optimizes images - no need for manual compression

### Content Writing Tips

**Origin Story**:
- Length: 2-4 paragraphs
- Voice: First person ("I built this because...")
- Focus: Frustration → belief → decision to build
- Avoid: Marketing speak, technical jargon

**Design Principles**:
- Count: 3-5 principles
- Voice: Confident, opinionated
- Focus: Trade-offs and conscious decisions
- Avoid: Generic principles that could apply to any product

**What It Does**:
- Length: 2-3 subsections with visuals
- Voice: Clear, straightforward
- Focus: Practical capabilities and how to access it
- Include: Screenshots, diagrams, or GIFs showing the product in action

### Updating the Main Page

After creating your project page, add a ProjectCard to the homepage (`app/page.tsx`):

```tsx
<div id="your-project">
  <ProjectCard
    title="Your Project"
    subtitle="Optional"
    description="Brief philosophical description"
    link="/projects/your-project"
    tags={["Tech", "Stack"]}
    status="active"
    imagePlaceholder="bg-gradient-to-br from-brand-green/20 to-brand-coral/20"
  />
</div>
```

Also add it to the Gallery dropdown in the navigation (both in `app/page.tsx` and `app/components/MDXLayout.tsx`).

## Tips

- Keep content focused and readable
- Use headings to structure your writing
- Add code examples where relevant
- Embed interactive components when needed
- Preview changes locally with `npm run dev`

## Examples

See these files for reference:
- `/app/manifesto/page.mdx` - Essay-style content
- `/app/projects/taru/page.mdx` - Project documentation

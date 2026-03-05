# Architecture

## Stack
- **Framework**: Next.js 16 with App Router
- **Content**: MDX via @next/mdx
- **Styling**: Tailwind CSS 3 with custom design tokens
- **Language**: TypeScript (strict mode)
- **Font**: Space Grotesk (via next/font/google)
- **Animations**: Motion (Framer Motion)
- **Utilities**: clsx, tailwind-merge
- **Package Manager**: pnpm
- **Deployment**: Vercel
- **Domain**: random-software.com

## Directory Structure

```
app/
  layout.tsx              # Root layout (font, metadata, Navigation)
  page.tsx                # Homepage (hero + project cards)
  globals.css             # Global styles, CSS variables
  components/
    Navigation.tsx        # Shared nav (client component, gallery dropdown)
    MDXLayout.tsx         # Content wrapper for MDX pages
    ProjectCard.tsx       # Homepage project card (carousel + info)
    ProjectCarousel.tsx   # Image carousel using progressive-carousel
    ProjectHero.tsx       # Project detail page hero (carousel + info)
    ProjectImage.tsx      # Responsive image with caption
    ProjectLinks.tsx      # External link buttons (github/demo/docs)
    DesignPrinciple.tsx   # Principle card for project pages
  config/
    projects.ts           # Centralized project data (single source of truth)
    status.ts             # ProjectStatus type + status styling config
  build/
    page.tsx              # "Vibecoding for Operators" course page (coming soon)
  manifesto/
    layout.tsx            # MDX layout wrapper
    page.mdx              # Manifesto essay
  projects/
    taru/
      layout.tsx          # Metadata + MDX layout
      page.mdx            # Taru project page

components/
  ui/
    shine-border.tsx      # Animated border effect (homepage hero)
    progressive-carousel.tsx  # Auto-advancing image carousel

public/
  images/projects/taru/   # Taru project screenshots
```

## Key Patterns

### Navigation
Single `Navigation` component in root layout. Gallery dropdown items auto-generated from `app/config/projects.ts` via `getGalleryItems()`. No manual nav updates needed when adding projects.

### Project Data Flow
`app/config/projects.ts` is the single source of truth for project metadata. Homepage and navigation both read from it. To add a project: add an entry to the config, create the MDX page, and add images.

### MDX Pages
Each MDX page needs a sibling `layout.tsx` that wraps children in `<MDXLayout>` and exports metadata. MDX component overrides are in root `mdx-components.tsx`.

### UI Components
Root-level `components/ui/` contains third-party-style primitives (shine-border, progressive-carousel). App-level `app/components/` contains project-specific components.

## Environment
No environment variables required. This is a purely static site with no API routes, database, or auth.

## Local Development
```bash
pnpm install
pnpm run dev    # http://localhost:3009
pnpm run build  # Production build
pnpm run lint   # ESLint
```

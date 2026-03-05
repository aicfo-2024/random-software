# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev      # Start dev server on port 3009
pnpm run build    # Build for production
pnpm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 portfolio site with MDX support for content pages. Deployed on Vercel at random-software.com.

See `context/architecture.md` for full system overview and directory structure.

### Key Technologies
- **Next.js 16** with App Router
- **MDX** for content pages (manifesto, project pages)
- **Tailwind CSS** with custom design tokens
- **TypeScript** (strict mode)
- **Motion** (Framer Motion) for animations
- **pnpm** as package manager

### Content Structure

Content pages use MDX with a specific pattern:
- Each content page needs a `layout.tsx` wrapper that imports `MDXLayout`
- Project pages follow a 3-section framework: **Origin Story → Design Principles → What It Does**
- See `CONTENT_GUIDE.md` for the full project page template and component documentation

### Brand Colors (defined in tailwind.config.ts)
- `brand-green`: #00B140 (primary)
- `brand-coral`: #FF6B5A (accent)
- `base-bg`: #FAFAFA
- `base-text`: #2C2C2C
- `base-border`: #E5E5E5

### Typography
- Font: Space Grotesk (loaded via `next/font/google`)
- Custom sizes: `text-hero` (64px), `text-display` (48px), `text-h1` (32px)

### Component Locations
- `app/components/` - Project-specific components (ProjectCard, MDXLayout, ProjectHero, Navigation, etc.)
- `components/ui/` - Generic UI primitives (shine-border, progressive-carousel)
- `mdx-components.tsx` - Root-level MDX component overrides for typography styling
- `app/config/projects.ts` - Single source of truth for all project data
- `app/config/status.ts` - Project status types and styling

### Navigation
Navigation is handled by `app/components/Navigation.tsx`, rendered in the root layout. Gallery dropdown items are auto-generated from `app/config/projects.ts` — no manual nav updates needed when adding projects.

### Adding New Projects
1. Add project entry to `app/config/projects.ts`
2. Create `app/projects/[name]/layout.tsx` with metadata and MDXLayout wrapper
3. Create `app/projects/[name]/page.mdx` using the template from CONTENT_GUIDE.md
4. Add images to `public/images/projects/[name]/`

Navigation updates automatically from the config.

### Known Gotchas
- The global CSS applies 200ms transitions to ALL elements — can cause unexpected animation on dynamically added content
- MDX list styles are explicitly restored in globals.css because Tailwind resets them
- `tailwind.config.ts` has a `safelist` for dynamic grid-cols classes used by the carousel

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3009
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 portfolio site with MDX support for content pages. Deployed on Vercel.

### Key Technologies
- **Next.js 16** with App Router
- **MDX** for content pages (manifesto, project pages)
- **Tailwind CSS** with custom design tokens
- **TypeScript**

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
- `app/components/` - Reusable components (ProjectCard, MDXLayout, ProjectHero, etc.)
- `mdx-components.tsx` - Root-level MDX component overrides for typography styling
- `app/page.tsx` and `app/components/MDXLayout.tsx` both contain navigation (keep in sync)

### Adding New Projects
1. Create `app/projects/[name]/layout.tsx` with metadata and MDXLayout wrapper
2. Create `app/projects/[name]/page.mdx` using the template from CONTENT_GUIDE.md
3. Add images to `public/images/projects/[name]/`
4. Add ProjectCard to homepage (`app/page.tsx`)
5. Update Gallery dropdown in both `app/page.tsx` and `app/components/MDXLayout.tsx`

# Architectural Decisions

## 001: Centralized project config
**Decision**: All project data lives in `app/config/projects.ts` as a typed array.
**Why**: Homepage cards and navigation gallery dropdown both consume the same data. Single source of truth prevents drift.
**Trade-off**: Adding a project requires updating the config file + creating MDX files (vs. purely file-system-based routing).

## 002: Navigation consolidation
**Decision**: Single `Navigation` component in root layout, gallery items auto-generated from project config.
**Why**: Previously navigation was duplicated in `page.tsx` and `MDXLayout.tsx`. Consolidation eliminates sync issues.

## 003: MDX with layout.tsx wrappers
**Decision**: Each MDX page has a sibling `layout.tsx` that provides metadata and wraps in `MDXLayout`.
**Why**: Next.js App Router metadata API requires a `.tsx` file. Layout wrappers let MDX pages stay pure content.

## 004: Two component directories
**Decision**: `components/ui/` at root for generic primitives, `app/components/` for project-specific components.
**Why**: UI primitives (shine-border, progressive-carousel) are reusable building blocks. App components encode project-specific domain logic and styling.

## 005: No database, no API routes
**Decision**: Purely static site with no backend.
**Why**: Portfolio/showcase site with no dynamic data needs. Content lives in MDX files committed to the repo.

## 006: Gallery-first design aesthetic
**Decision**: Clean, minimal design with generous whitespace, single-column project layout, curated feel.
**Why**: The site is an exhibition of "software with something to say" - the design should feel intentional, not like a generic dev portfolio.

## 007: Progressive carousel for project images
**Decision**: Auto-advancing carousel with labeled tabs instead of static hero images.
**Why**: Shows multiple facets of each project at a glance. Labels give context without requiring clicks.

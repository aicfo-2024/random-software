# Random Software

A lightweight portfolio landing page showcasing various software projects and experiments.

## Overview

This is the main portfolio site at `random-software.com` that serves as a hub for all projects, with individual projects hosted on subdomains.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3009](http://localhost:3009) to view the site.

## Project Structure

```
random-software/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page with project cards
│   └── globals.css      # Global styles
├── public/              # Static assets
├── PORTFOLIO_SETUP.md   # Setup guide
└── next.config.ts       # Next.js configuration
```

## Projects

- **Tekka (鉄火)**: AI-powered content processing system - [tekka.random-software.com](https://tekka.random-software.com)
- More projects coming soon...

## Deployment

This site is deployed on Vercel with automatic deployments from the main branch.

### Adding New Projects

1. Create a new project card in `app/page.tsx`
2. Deploy your project to Vercel
3. Add subdomain DNS record (CNAME to `cname.vercel-dns.com`)
4. Configure subdomain in Vercel project settings

See `PORTFOLIO_SETUP.md` for detailed deployment instructions.

## License

ISC

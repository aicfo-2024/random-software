# Portfolio Site Setup Guide

## Overview

This guide will walk you through creating a lightweight portfolio landing page at `random-software.com` that serves as a hub for your projects, with Tekka hosted at `tekka.random-software.com`.

## Architecture

```
random-software.com (Main portfolio site)
    ├── Simple landing page with project cards
    └── Links to subdomains

tekka.random-software.com (Subdomain)
    └── Full Tekka Next.js application
```

---

## Part 1: Create the Portfolio Site

### Step 1: Create New Repository

```bash
# Create a new directory for your portfolio
mkdir random-software
cd random-software

# Initialize git
git init

# Create basic structure
mkdir src public
touch README.md .gitignore
```

### Step 2: Choose Your Framework

**Option A: Next.js (Recommended)**

```bash
# Create Next.js app
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir

# Answer prompts:
# ✓ Would you like to use ESLint? Yes
# ✓ Would you like to use Turbopack? No
# ✓ Would you like to customize the import alias? No
```

**Option B: Astro (Static Site Generator)**

```bash
# Create Astro site
npm create astro@latest . -- --template minimal --typescript strict --install

# Astro is great for static sites with minimal JS
```

**Option C: Vite + React**

```bash
# Create Vite app
npm create vite@latest . -- --template react-ts

# Install Tailwind (optional)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Create Landing Page

Create a simple landing page structure. Here's a template for **Next.js**:

**File: `app/page.tsx`**

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Random Software
          </h1>
          <p className="text-xl text-slate-300">
            A collection of experiments, tools, and projects
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project Card: Tekka */}
          <ProjectCard
            title="Tekka (鉄火)"
            description="AI-powered content processing system. Automated RSS digests, podcast production pipeline, and persistent memory extraction."
            link="https://tekka.random-software.com"
            tags={["AI", "Python", "Next.js"]}
            status="active"
          />

          {/* Placeholder for future projects */}
          <ProjectCard
            title="Project 2"
            description="Coming soon..."
            link="#"
            tags={["TBD"]}
            status="planned"
          />

          <ProjectCard
            title="Project 3"
            description="Coming soon..."
            link="#"
            tags={["TBD"]}
            status="planned"
          />
        </div>

        {/* Footer */}
        <footer className="text-center mt-20 text-slate-400">
          <p>Built with Next.js · Deployed on Vercel</p>
        </footer>
      </div>
    </main>
  );
}

// Project Card Component
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  status: "active" | "planned" | "archived";
}

function ProjectCard({ title, description, link, tags, status }: ProjectCardProps) {
  const statusColors = {
    active: "bg-green-500/20 text-green-300 border-green-500/50",
    planned: "bg-yellow-500/20 text-yellow-300 border-yellow-500/50",
    archived: "bg-slate-500/20 text-slate-300 border-slate-500/50",
  };

  return (
    <a
      href={link}
      className="block p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-500 transition-all hover:scale-105"
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs px-3 py-1 rounded-full border ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-slate-300 mb-4 line-clamp-3">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
```

### Step 4: Create `.gitignore`

```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Next.js
.next/
out/
build/
dist/

# Environment
.env
.env*.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### Step 5: Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## Part 2: Deploy Portfolio to Vercel

### Step 1: Push to GitHub

```bash
# Create GitHub repository at https://github.com/new
# Name it: random-software

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/random-software.git
git add .
git commit -m "Initial portfolio site"
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Click **"Import Project"**
3. Select your `random-software` repository
4. Configure:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
5. Click **"Deploy"**
6. Wait ~2-3 minutes for initial build

### Step 3: Add Custom Domain

1. In Vercel project settings, go to **"Domains"**
2. Add domain: `random-software.com`
3. Vercel will show you DNS records to configure

---

## Part 3: Configure DNS for Main Domain

### DNS Records (in your domain registrar)

Add these records in your domain registrar's DNS settings:

```
Type    Name    Value                       TTL
A       @       76.76.21.21                 3600
A       @       76.76.19.19                 3600
AAAA    @       2606:4700:10::6816:1315     3600
AAAA    @       2606:4700:10::6816:1515     3600
```

**Note**: The exact IPs depend on your Vercel plan. Vercel will provide the correct values when you add the domain.

**Alternative (CNAME method)**:
```
Type    Name    Value                       TTL
CNAME   @       cname.vercel-dns.com        3600
```

### Verification

1. Wait 5-60 minutes for DNS propagation
2. Check status in Vercel dashboard (Domains tab)
3. Visit `https://random-software.com` to verify

---

## Part 4: Configure Tekka Subdomain

### Step 1: Add Subdomain in Vercel (Tekka Project)

1. Go to your **Tekka project** in Vercel (the existing one)
2. Navigate to **Settings → Domains**
3. Click **"Add"**
4. Enter: `tekka.random-software.com`
5. Click **"Add"**

### Step 2: Configure DNS for Subdomain

Add this record in your domain registrar:

```
Type    Name    Value                       TTL
CNAME   tekka   cname.vercel-dns.com        3600
```

**Explanation**:
- `tekka` is the subdomain prefix
- Points to Vercel's CNAME
- Vercel will route it to your Tekka project

### Step 3: Verify Subdomain

1. Wait 5-60 minutes for DNS propagation
2. Check status in Vercel dashboard (Tekka project → Domains)
3. Visit `https://tekka.random-software.com` to verify

---

## Part 5: Update Tekka Configuration

### Update Environment Variables

In your Tekka project's Vercel dashboard:

**Settings → Environment Variables**

Add/update:
```
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_SITE_URL=https://tekka.random-software.com
```

### Update CORS Settings (Backend)

**File: `src/api/main.py`**

```python
# Update CORS origins to include new subdomain
origins = [
    "http://localhost:3000",
    "https://tekka.random-software.com",
    "https://your-vercel-app.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Redeploy backend after updating CORS.

---

## Part 6: SSL Certificates (Automatic)

Vercel automatically provisions SSL certificates via Let's Encrypt:
- `https://random-software.com` → Auto SSL
- `https://tekka.random-software.com` → Auto SSL

**No action required** - certificates are managed automatically.

---

## DNS Configuration Summary

Here's what your final DNS should look like:

```
# Main domain (portfolio site)
A       @           76.76.21.21
CNAME   www         cname.vercel-dns.com

# Tekka subdomain
CNAME   tekka       cname.vercel-dns.com

# Future subdomains (as needed)
CNAME   project2    cname.vercel-dns.com
CNAME   api         your-api-host.com
```

---

## Troubleshooting

### DNS Not Propagating

```bash
# Check DNS propagation
dig random-software.com
dig tekka.random-software.com

# Check from different DNS servers
nslookup random-software.com 8.8.8.8
nslookup tekka.random-software.com 8.8.8.8
```

### Vercel Domain Verification Failing

1. Double-check DNS records match Vercel's instructions exactly
2. Try removing and re-adding the domain
3. Contact Vercel support (very responsive)

### Subdomain Not Routing to Correct Project

1. Verify you added the subdomain in the **Tekka project**, not the portfolio project
2. Check CNAME record points to `cname.vercel-dns.com`
3. Wait up to 60 minutes for propagation

### SSL Certificate Not Provisioning

1. Ensure DNS is fully propagated first
2. Remove and re-add domain in Vercel
3. Check for CAA records blocking Let's Encrypt

---

## Maintenance

### Adding New Projects

1. **Create subdomain in DNS**:
   ```
   CNAME   newproject   cname.vercel-dns.com
   ```

2. **Deploy project to Vercel**, add custom domain in settings

3. **Update portfolio site** with new project card

### Updating Portfolio Content

```bash
# Make changes locally
cd random-software
# Edit app/page.tsx

# Test locally
npm run dev

# Deploy
git add .
git commit -m "Update portfolio content"
git push

# Vercel auto-deploys on push to main
```

---

## Estimated Timeline

- **Part 1-2** (Create & Deploy Portfolio): 30-60 minutes
- **Part 3** (Configure DNS): 5 minutes + 10-60 min propagation
- **Part 4** (Configure Subdomain): 5 minutes + 10-60 min propagation
- **Part 5** (Update Tekka Config): 10 minutes

**Total: 2-3 hours** (including DNS propagation wait time)

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [DNS Checker Tool](https://dnschecker.org/)
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)

---

## Next Steps

After completing this setup:

1. ✅ Portfolio site live at `random-software.com`
2. ✅ Tekka accessible at `tekka.random-software.com`
3. ✅ SSL certificates auto-provisioned
4. ✅ Ready to add more projects as subdomains

Want to customize the portfolio design further? Consider:
- Adding a blog section
- Project case studies with detailed write-ups
- Contact form integration
- Analytics (Vercel Analytics, Plausible)
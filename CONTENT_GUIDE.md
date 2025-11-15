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

1. Create directory: `mkdir -p app/projects/project-name`
2. Create MDX file: `touch app/projects/project-name/page.mdx`
3. Use the Taru page as a template
4. Update the main page to link to it

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

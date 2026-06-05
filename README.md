# DevOps Glossary

The Urban Dictionary for DevOps — a curated glossary of 108+ DevOps terms, explained with clarity and a bit of personality.

**Live site:** [devopsglossary.com](https://devopsglossary.com)

## Tech Stack

- [Astro](https://astro.build) — static site generation with on-demand rendering
- [React](https://react.dev) — interactive UI components
- [TypeScript](https://www.typescriptlang.org) — type safety
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Vitest](https://vitest.dev) — testing
- [Vercel](https://vercel.com) — hosting (`@astrojs/vercel` adapter)

## Prerequisites

- Node.js >= 22.12.0
- [pnpm](https://pnpm.io)

## Getting Started

```bash
pnpm install
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm preview      # Preview the production build locally
pnpm new          # Create a new glossary term
pnpm test         # Run tests
pnpm test:watch   # Run tests in watch mode
```

## Project Structure

```
src/
├── components/       # React and Astro components
├── content.config.ts # Content collection schema
├── data/terms/       # Glossary term files (.md)
├── layouts/          # Page layouts
├── pages/            # Astro routes
└── styles/           # Global styles
vercel.ts             # Vercel project configuration (regions, fluid compute)
.github/workflows/    # CI (lint and test)
```

## Adding a Glossary Term

The easiest way to add a term is with the interactive script:

```bash
pnpm new
```

It will prompt for all required fields, validate your input, and generate the file.

Alternatively, create a new `.md` file in `src/data/terms/` manually:

```markdown
---
title: My Term
slug: my-term
description: "A short description (max 160 characters)."
relatedTerms:
  - some-other-term
tags:
  - relevant-tag
category: tool
dateAdded: 2026-01-01
---

Your explanation here. Be clear, be useful, have fun with it.
```

### Frontmatter Fields

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Display name |
| `slug` | Yes | URL path segment |
| `description` | Yes | Short description (max 160 chars, used for SEO) |
| `abbreviation` | No | Common abbreviation (e.g., "K8s") |
| `relatedTerms` | No | Array of slugs linking to other terms |
| `tags` | No | Array of tags for categorization |
| `category` | Yes | One of: `methodology`, `tool`, `platform`, `concept`, `operating-system`, `practice`, `observability` |
| `dateAdded` | No | Date the term was added |

## Deployment

The site is hosted on [Vercel](https://vercel.com) using the `@astrojs/vercel`
adapter. Deployments happen automatically via Vercel's Git integration: pushes to
`main` ship to production, and pull requests get preview deployments.

Project configuration lives in `vercel.ts` — functions run in `fra1` and `iad1`
with Fluid Compute enabled. Images are served through Vercel Image Optimization in
production (and `sharp` locally in dev).

GitHub Actions (`.github/workflows/ci.yml`) runs the build and test suite on every
push and pull request.

## License

[MIT](LICENSE)

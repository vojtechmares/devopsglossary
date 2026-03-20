# DevOps Glossary

The Urban Dictionary for DevOps — a curated glossary of 108+ DevOps terms, explained with clarity and a bit of personality.

**Live site:** [devopsglossary.com](https://devopsglossary.com)

## Tech Stack

- [Astro](https://astro.build) — static site generation with on-demand rendering
- [React](https://react.dev) — interactive UI components
- [TypeScript](https://www.typescriptlang.org) — type safety
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Vitest](https://vitest.dev) — testing
- Custom Node.js server (`@astrojs/node` adapter)

## Prerequisites

- Node.js >= 22.12.0
- [pnpm](https://pnpm.io)

## Getting Started

```bash
pnpm install
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Run production server
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
├── server.ts         # Custom Node.js server
└── styles/           # Global styles
deploy/k8s/           # Helm chart for Kubernetes deployment
.github/workflows/    # CI/CD pipeline
```

## Adding a Glossary Term

Create a new `.md` file in `src/data/terms/`:

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

### Docker

```bash
docker build -t devopsglossary .
docker run -p 8080:8080 devopsglossary
```

### Kubernetes

A Helm chart is provided in `deploy/k8s/`:

```bash
helm install devopsglossary deploy/k8s/ -f deploy/k8s/values.production.yaml
```

### CI/CD

GitHub Actions workflow in `.github/workflows/main.yml` handles build and deployment.

## License

[MIT](LICENSE)

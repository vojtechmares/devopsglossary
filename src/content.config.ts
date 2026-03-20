import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const terms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/terms' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    abbreviation: z.string().optional(),
    description: z.string().max(160),
    relatedTerms: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    category: z.enum([
      'methodology',
      'tool',
      'platform',
      'concept',
      'operating-system',
      'practice',
      'observability',
    ]),
    dateAdded: z.coerce.date().optional(),
  }),
});

export const collections = { terms };

import { describe, it, expect } from 'vitest';
import { z } from 'astro/zod';

const searchIndexItemSchema = z.object({
  title: z.string(),
  slug: z.string(),
  abbreviation: z.string().optional(),
  description: z.string(),
  tags: z.array(z.string()),
  category: z.string(),
});

const searchIndexSchema = z.array(searchIndexItemSchema);

describe('search index shape', () => {
  it('validates correct index items', () => {
    const mockIndex = [
      {
        title: 'Kubernetes',
        slug: 'kubernetes',
        abbreviation: 'K8s',
        description: 'Container orchestration.',
        tags: ['containers'],
        category: 'platform',
      },
      {
        title: 'Docker',
        slug: 'docker',
        description: 'Container runtime.',
        tags: ['containers'],
        category: 'tool',
      },
    ];
    expect(() => searchIndexSchema.parse(mockIndex)).not.toThrow();
  });

  it('rejects items missing required fields', () => {
    const invalid = [{ title: 'Test' }];
    expect(() => searchIndexSchema.parse(invalid)).toThrow();
  });

  it('validates empty index', () => {
    expect(() => searchIndexSchema.parse([])).not.toThrow();
  });

  it('rejects non-array input', () => {
    expect(() => searchIndexSchema.parse('not an array')).toThrow();
  });

  it('rejects items with wrong tag type', () => {
    const invalid = [
      {
        title: 'Test',
        slug: 'test',
        description: 'desc',
        tags: 'not-an-array',
        category: 'tool',
      },
    ];
    expect(() => searchIndexSchema.parse(invalid)).toThrow();
  });
});

import { describe, it, expect } from 'vitest';
import { z } from 'astro/zod';

const termSchema = z.object({
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
  dateAdded: z.coerce.date(),
});

describe('term content schema', () => {
  it('accepts valid term data', () => {
    const valid = {
      title: 'Kubernetes',
      slug: 'kubernetes',
      abbreviation: 'K8s',
      description: 'Container orchestration platform.',
      relatedTerms: ['docker'],
      tags: ['containers'],
      category: 'platform',
      dateAdded: '2024-01-01',
    };
    expect(() => termSchema.parse(valid)).not.toThrow();
  });

  it('accepts data without optional fields', () => {
    const minimal = {
      title: 'Test',
      slug: 'test',
      description: 'A test term.',
      category: 'concept',
      dateAdded: '2024-01-01',
    };
    const result = termSchema.parse(minimal);
    expect(result.relatedTerms).toEqual([]);
    expect(result.tags).toEqual([]);
    expect(result.abbreviation).toBeUndefined();
  });

  it('rejects description over 160 characters', () => {
    const invalid = {
      title: 'Test',
      slug: 'test',
      description: 'a'.repeat(161),
      category: 'concept',
    };
    expect(() => termSchema.parse(invalid)).toThrow();
  });

  it('rejects invalid category', () => {
    const invalid = {
      title: 'Test',
      slug: 'test',
      description: 'A test term.',
      category: 'invalid-category',
    };
    expect(() => termSchema.parse(invalid)).toThrow();
  });

  it('rejects missing required fields', () => {
    expect(() => termSchema.parse({})).toThrow();
    expect(() => termSchema.parse({ title: 'Test' })).toThrow();
  });

  it('rejects missing dateAdded', () => {
    const invalid = {
      title: 'Test',
      slug: 'test',
      description: 'A test term.',
      category: 'concept',
    };
    expect(() => termSchema.parse(invalid)).toThrow();
  });

  it('coerces dateAdded string to Date', () => {
    const data = {
      title: 'Test',
      slug: 'test',
      description: 'A test term.',
      category: 'concept',
      dateAdded: '2024-06-15',
    };
    const result = termSchema.parse(data);
    expect(result.dateAdded).toBeInstanceOf(Date);
  });
});

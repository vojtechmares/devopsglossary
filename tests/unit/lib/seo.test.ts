import { describe, it, expect } from 'vitest';
import {
  generateDefinedTermSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';

describe('generateDefinedTermSchema', () => {
  it('returns correct DefinedTerm schema', () => {
    const result = generateDefinedTermSchema({
      name: 'Kubernetes',
      description: 'Container orchestration platform.',
      url: 'https://devopsglossary.com/glossary/kubernetes',
    });

    expect(result).toEqual({
      '@context': 'https://schema.org',
      '@type': 'DefinedTerm',
      name: 'Kubernetes',
      description: 'Container orchestration platform.',
      url: 'https://devopsglossary.com/glossary/kubernetes',
    });
  });
});

describe('generateWebSiteSchema', () => {
  it('returns correct WebSite schema', () => {
    const result = generateWebSiteSchema({
      name: 'DevOps Glossary',
      url: 'https://devopsglossary.com',
      description: 'A glossary of DevOps terms.',
    });

    expect(result).toEqual({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'DevOps Glossary',
      url: 'https://devopsglossary.com',
      description: 'A glossary of DevOps terms.',
    });
  });
});

describe('generateBreadcrumbSchema', () => {
  it('returns correct BreadcrumbList schema', () => {
    const result = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://devopsglossary.com' },
      { name: 'Kubernetes', url: 'https://devopsglossary.com/glossary/kubernetes' },
    ]);

    expect(result).toEqual({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://devopsglossary.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Kubernetes',
          item: 'https://devopsglossary.com/glossary/kubernetes',
        },
      ],
    });
  });

  it('handles empty items', () => {
    const result = generateBreadcrumbSchema([]);
    expect(result).toEqual({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [],
    });
  });

  it('handles single item', () => {
    const result = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://devopsglossary.com' },
    ]);
    expect((result as any).itemListElement).toHaveLength(1);
    expect((result as any).itemListElement[0].position).toBe(1);
  });
});

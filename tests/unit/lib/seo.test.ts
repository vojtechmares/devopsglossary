import { describe, it, expect } from 'vitest';
import {
  generateDefinedTermSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generateDefinedTermSetSchema,
  wrapInGraph,
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

  it('includes datePublished when provided', () => {
    const result = generateDefinedTermSchema({
      name: 'Kubernetes',
      description: 'Container orchestration platform.',
      url: 'https://devopsglossary.com/glossary/kubernetes',
      datePublished: '2024-01-15',
    });

    expect(result).toEqual({
      '@context': 'https://schema.org',
      '@type': 'DefinedTerm',
      name: 'Kubernetes',
      description: 'Container orchestration platform.',
      url: 'https://devopsglossary.com/glossary/kubernetes',
      datePublished: '2024-01-15',
    });
  });

  it('omits datePublished key entirely when not provided', () => {
    const result = generateDefinedTermSchema({
      name: 'Kubernetes',
      description: 'Container orchestration platform.',
      url: 'https://devopsglossary.com/glossary/kubernetes',
    });

    expect(result).not.toHaveProperty('datePublished');
  });
});

describe('generateWebSiteSchema', () => {
  it('returns correct WebSite schema with potentialAction', () => {
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
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://devopsglossary.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    });
  });

  it('includes potentialAction with SearchAction type', () => {
    const result = generateWebSiteSchema({
      name: 'DevOps Glossary',
      url: 'https://devopsglossary.com',
      description: 'A glossary of DevOps terms.',
    }) as any;

    expect(result.potentialAction['@type']).toBe('SearchAction');
    expect(result.potentialAction.target.urlTemplate).toContain('/search?q={search_term_string}');
    expect(result.potentialAction['query-input']).toBe('required name=search_term_string');
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

describe('generateDefinedTermSetSchema', () => {
  it('returns correct DefinedTermSet schema', () => {
    const result = generateDefinedTermSetSchema({
      name: 'DevOps Glossary',
      description: 'A collection of DevOps terms.',
      terms: [
        {
          name: 'Kubernetes',
          description: 'Container orchestration platform.',
          url: 'https://devopsglossary.com/glossary/kubernetes',
        },
        {
          name: 'Docker',
          description: 'Container runtime.',
          url: 'https://devopsglossary.com/glossary/docker',
        },
      ],
    });

    expect(result).toEqual({
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: 'DevOps Glossary',
      description: 'A collection of DevOps terms.',
      hasDefinedTerm: [
        {
          '@type': 'DefinedTerm',
          name: 'Kubernetes',
          description: 'Container orchestration platform.',
          url: 'https://devopsglossary.com/glossary/kubernetes',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Docker',
          description: 'Container runtime.',
          url: 'https://devopsglossary.com/glossary/docker',
        },
      ],
    });
  });
});

describe('wrapInGraph', () => {
  it('wraps an array of schemas in @graph with a single @context, stripping per-item @context', () => {
    const schemas = [
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Test' },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [] },
    ];

    const result = wrapInGraph(schemas) as any;

    expect(result['@context']).toBe('https://schema.org');
    expect(result['@graph']).toHaveLength(2);
    expect(result['@graph'][0]).not.toHaveProperty('@context');
    expect(result['@graph'][1]).not.toHaveProperty('@context');
    expect(result['@graph'][0]['@type']).toBe('WebSite');
    expect(result['@graph'][1]['@type']).toBe('BreadcrumbList');
  });

  it('returns a single object unchanged (not wrapped in @graph)', () => {
    const schema = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Test' };

    const result = wrapInGraph(schema);

    expect(result).toEqual(schema);
    expect(result).not.toHaveProperty('@graph');
  });
});

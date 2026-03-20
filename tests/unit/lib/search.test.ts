import { describe, it, expect } from 'vitest';
import { search, type SearchItem } from '@/lib/search';

const items: SearchItem[] = [
  {
    title: 'Kubernetes',
    slug: 'kubernetes',
    abbreviation: 'K8s',
    description: 'An open-source container orchestration platform.',
    tags: ['containers', 'orchestration'],
    category: 'platform',
  },
  {
    title: 'Docker',
    slug: 'docker',
    description: 'A platform for building and running containers.',
    tags: ['containers', 'virtualization'],
    category: 'tool',
  },
  {
    title: 'CI/CD',
    slug: 'ci-cd',
    abbreviation: 'CI/CD',
    description: 'Continuous Integration and Continuous Delivery.',
    tags: ['automation', 'pipeline'],
    category: 'practice',
  },
  {
    title: 'Terraform',
    slug: 'terraform',
    abbreviation: 'TF',
    description: 'Infrastructure as code tool for provisioning.',
    tags: ['iac', 'provisioning'],
    category: 'tool',
  },
];

describe('search', () => {
  it('returns empty array for empty query', () => {
    expect(search(items, '')).toEqual([]);
  });

  it('returns empty array for whitespace-only query', () => {
    expect(search(items, '   ')).toEqual([]);
  });

  it('returns empty array when no match', () => {
    expect(search(items, 'zzzznotfound')).toEqual([]);
  });

  it('scores exact title match highest', () => {
    const results = search(items, 'docker');
    expect(results[0].slug).toBe('docker');
    expect(results[0].score).toBe(100);
  });

  it('scores exact abbreviation match high', () => {
    const results = search(items, 'k8s');
    expect(results[0].slug).toBe('kubernetes');
    expect(results[0].score).toBe(90);
  });

  it('scores title starts-with', () => {
    const results = search(items, 'kube');
    expect(results[0].slug).toBe('kubernetes');
    expect(results[0].score).toBe(80);
  });

  it('scores abbreviation starts-with', () => {
    const extendedItems: SearchItem[] = [
      ...items,
      {
        title: 'Terragrunt',
        slug: 'terragrunt',
        abbreviation: 'TGR',
        description: 'A wrapper for Terraform.',
        tags: ['iac'],
        category: 'tool',
      },
    ];
    const results = search(extendedItems, 'tg');
    expect(results[0].slug).toBe('terragrunt');
    expect(results[0].score).toBe(70);
  });

  it('scores title contains', () => {
    const results = search(items, 'ernete');
    expect(results[0].slug).toBe('kubernetes');
    expect(results[0].score).toBe(60);
  });

  it('scores description contains', () => {
    const results = search(items, 'provisioning');
    expect(results[0].slug).toBe('terraform');
    expect(results[0].score).toBe(40);
  });

  it('scores tag match', () => {
    const results = search(items, 'pipeline');
    expect(results[0].slug).toBe('ci-cd');
    expect(results[0].score).toBe(30);
  });

  it('scores category match', () => {
    const results = search(items, 'practice');
    expect(results[0].slug).toBe('ci-cd');
    expect(results[0].score).toBe(20);
  });

  it('returns results sorted by score descending', () => {
    const results = search(items, 'container');
    expect(results.length).toBeGreaterThan(0);
    for (let i = 1; i < results.length; i++) {
      expect(results[i].score).toBeLessThanOrEqual(results[i - 1].score);
    }
  });

  it('is case-insensitive', () => {
    const results = search(items, 'DOCKER');
    expect(results[0].slug).toBe('docker');
  });

  it('trims query whitespace', () => {
    const results = search(items, '  docker  ');
    expect(results[0].slug).toBe('docker');
  });

  it('handles items without abbreviation', () => {
    const results = search(items, 'docker');
    expect(results[0].abbreviation).toBeUndefined();
  });
});

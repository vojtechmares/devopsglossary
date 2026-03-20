import { describe, it, expect } from 'vitest';
import { cn, groupByLetter, slugify, type Term } from '@/lib/utils';

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    expect(cn('base', false && 'hidden', 'visible')).toBe('base visible');
  });

  it('merges Tailwind conflicts', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('handles empty inputs', () => {
    expect(cn()).toBe('');
  });

  it('handles undefined and null', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });
});

describe('groupByLetter', () => {
  const makeTerm = (title: string): Term => ({
    title,
    slug: title.toLowerCase(),
    description: 'desc',
    tags: [],
    category: 'concept',
  });

  it('groups terms by first letter', () => {
    const terms = [makeTerm('Docker'), makeTerm('Ansible'), makeTerm('Argo')];
    const grouped = groupByLetter(terms);
    expect(grouped.get('D')).toHaveLength(1);
    expect(grouped.get('A')).toHaveLength(2);
  });

  it('groups non-alpha characters under #', () => {
    const terms = [makeTerm('3scale')];
    const grouped = groupByLetter(terms);
    expect(grouped.get('#')).toHaveLength(1);
  });

  it('handles empty array', () => {
    const grouped = groupByLetter([]);
    expect(grouped.size).toBe(0);
  });

  it('groups empty title under #', () => {
    const terms = [makeTerm('')];
    const grouped = groupByLetter(terms);
    expect(grouped.get('#')).toHaveLength(1);
  });

  it('handles lowercase titles', () => {
    const terms = [makeTerm('docker')];
    const grouped = groupByLetter(terms);
    expect(grouped.get('D')).toHaveLength(1);
  });
});

describe('slugify', () => {
  it('converts to lowercase kebab-case', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify('CI/CD Pipeline!')).toBe('ci-cd-pipeline');
  });

  it('trims leading and trailing dashes', () => {
    expect(slugify('--hello--')).toBe('hello');
  });

  it('handles multiple spaces', () => {
    expect(slugify('one   two   three')).toBe('one-two-three');
  });

  it('handles empty string', () => {
    expect(slugify('')).toBe('');
  });
});

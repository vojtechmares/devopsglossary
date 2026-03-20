import { describe, it, expect } from 'vitest';
import { VALID_CATEGORIES, formatCategoryLabel, isValidCategory } from '@/lib/categories';

describe('categories', () => {
  it('VALID_CATEGORIES contains exactly 7 categories matching schema enum', () => {
    expect(VALID_CATEGORIES).toEqual([
      'methodology',
      'tool',
      'platform',
      'concept',
      'operating-system',
      'practice',
      'observability',
    ]);
  });

  it('formatCategoryLabel converts slug to title case', () => {
    expect(formatCategoryLabel('operating-system')).toBe('Operating System');
    expect(formatCategoryLabel('tool')).toBe('Tool');
    expect(formatCategoryLabel('methodology')).toBe('Methodology');
  });

  it('isValidCategory returns true for valid categories', () => {
    expect(isValidCategory('tool')).toBe(true);
    expect(isValidCategory('platform')).toBe(true);
    expect(isValidCategory('observability')).toBe(true);
  });

  it('isValidCategory returns false for invalid categories', () => {
    expect(isValidCategory('invalid')).toBe(false);
    expect(isValidCategory('')).toBe(false);
    expect(isValidCategory('Tool')).toBe(false);
  });
});

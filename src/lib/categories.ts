export const VALID_CATEGORIES = [
  'methodology',
  'tool',
  'platform',
  'concept',
  'operating-system',
  'practice',
  'observability',
] as const;

export type Category = (typeof VALID_CATEGORIES)[number];

export function formatCategoryLabel(category: string): string {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function isValidCategory(value: string): value is Category {
  return (VALID_CATEGORIES as readonly string[]).includes(value);
}

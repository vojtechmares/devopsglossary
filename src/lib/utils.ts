import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export interface Term {
  title: string;
  slug: string;
  abbreviation?: string;
  description: string;
  tags: string[];
  category: string;
}

export function groupByLetter(terms: Term[]): Map<string, Term[]> {
  const map = new Map<string, Term[]>();
  for (const term of terms) {
    const firstChar = term.title[0]?.toUpperCase() ?? '';
    const letter = /[A-Z]/.test(firstChar) ? firstChar : '#';
    const existing = map.get(letter);
    if (existing) {
      existing.push(term);
    } else {
      map.set(letter, [term]);
    }
  }
  return map;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

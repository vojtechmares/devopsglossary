export interface SearchItem {
  title: string;
  slug: string;
  abbreviation?: string;
  description: string;
  tags: string[];
  category: string;
}

export interface SearchResult extends SearchItem {
  score: number;
}

export function search(items: SearchItem[], query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const item of items) {
    const score = scoreItem(item, q);
    if (score > 0) {
      results.push({ ...item, score });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

function scoreItem(item: SearchItem, query: string): number {
  const title = item.title.toLowerCase();
  const abbreviation = item.abbreviation?.toLowerCase() ?? '';
  const description = item.description.toLowerCase();

  // Exact title match
  if (title === query) return 100;

  // Exact abbreviation match
  if (abbreviation && abbreviation === query) return 90;

  // Title starts with query
  if (title.startsWith(query)) return 80;

  // Abbreviation starts with query
  if (abbreviation && abbreviation.startsWith(query)) return 70;

  // Title contains query
  if (title.includes(query)) return 60;

  // Description contains query
  if (description.includes(query)) return 40;

  // Tag match
  if (item.tags.some((tag) => tag.toLowerCase().includes(query))) return 30;

  // Category match
  if (item.category.toLowerCase().includes(query)) return 20;

  return 0;
}

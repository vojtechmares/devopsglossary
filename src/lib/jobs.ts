import { getCollection } from 'astro:content';

export interface Job {
  title: string;
  company: string;
  url: string;
  location?: string;
  description?: string;
  postedAt: Date;
  expiresAt?: Date;
}

/**
 * Loads sponsored job postings, drops expired ones, and sorts newest first.
 * Returns an empty array when there are no active postings.
 */
export async function getActiveJobs(): Promise<Job[]> {
  const now = Date.now();
  const jobs = await getCollection('jobs');
  return jobs
    .map((entry) => entry.data)
    .filter((job) => !job.expiresAt || job.expiresAt.getTime() >= now)
    .sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());
}

/** Deterministically pick a posting for a given slot ordinal (undefined if none). */
export function pickJobForIndex(jobs: Job[], index: number): Job | undefined {
  if (jobs.length === 0) return undefined;
  return jobs[((index % jobs.length) + jobs.length) % jobs.length];
}

/** Deterministic index derived from a slug, so different pages surface different postings. */
export function slugIndex(slug: string, length: number): number {
  if (length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < slug.length; i++) {
    sum += slug.charCodeAt(i);
  }
  return sum % length;
}

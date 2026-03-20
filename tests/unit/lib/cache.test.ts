import { describe, it, expect } from 'vitest';
import { generateETag } from '@/lib/cache';

describe('generateETag', () => {
  it('returns a quoted hex string', async () => {
    const result = await generateETag('hello world');
    expect(result).toMatch(/^"[a-f0-9]+"$/);
  });

  it('returns consistent output for the same input', async () => {
    const result1 = await generateETag('test content');
    const result2 = await generateETag('test content');
    expect(result1).toBe(result2);
  });

  it('returns different output for different input', async () => {
    const result1 = await generateETag('content a');
    const result2 = await generateETag('content b');
    expect(result1).not.toBe(result2);
  });
});

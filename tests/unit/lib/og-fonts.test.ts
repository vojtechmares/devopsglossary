import { describe, it, expect } from 'vitest';
import { loadFonts } from '@/lib/og-fonts';

describe('loadFonts', () => {
  it('returns the three OG-image fonts with non-empty data', () => {
    const fonts = loadFonts();
    expect(fonts).toHaveLength(3);

    expect(fonts[0]).toMatchObject({ name: 'Inter', weight: 400, style: 'normal' });
    expect(fonts[1]).toMatchObject({ name: 'Inter', weight: 700, style: 'normal' });
    expect(fonts[2]).toMatchObject({ name: 'JetBrains Mono', weight: 700, style: 'normal' });

    for (const font of fonts) {
      expect(font.data.byteLength).toBeGreaterThan(0);
    }
  });

  it('memoizes the result and returns the same array on subsequent calls', () => {
    const first = loadFonts();
    const second = loadFonts();
    expect(second).toBe(first);
  });
});

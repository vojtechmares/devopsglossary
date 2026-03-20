import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Font } from 'satori';

let cached: Font[] | null = null;

export function loadFonts(): Font[] {
  if (cached) return cached;

  const fontsDir = join(process.cwd(), 'src/assets/fonts');

  cached = [
    {
      name: 'Inter',
      data: readFileSync(join(fontsDir, 'Inter-Regular.ttf')),
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Inter',
      data: readFileSync(join(fontsDir, 'Inter-Bold.ttf')),
      weight: 700 as const,
      style: 'normal' as const,
    },
    {
      name: 'JetBrains Mono',
      data: readFileSync(join(fontsDir, 'JetBrainsMono-Bold.ttf')),
      weight: 700 as const,
      style: 'normal' as const,
    },
  ];

  return cached;
}

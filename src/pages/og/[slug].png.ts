import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { loadFonts } from '../../lib/og-fonts';
import { buildTermOgImage, buildDefaultOgImage } from '../../lib/og-template';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const { slug } = params;

    let node;

    if (slug === 'default') {
      node = buildDefaultOgImage();
    } else {
      const terms = await getCollection('terms');
      const term = terms.find((t) => t.data.slug === slug);

      if (!term) {
        return new Response('Not found', { status: 404 });
      }

      node = buildTermOgImage({
        title: term.data.title,
        abbreviation: term.data.abbreviation,
        description: term.data.description,
        category: term.data.category,
        tags: term.data.tags,
      });
    }

    const fonts = loadFonts();

    const svg = await satori(node as React.ReactNode, {
      width: 1200,
      height: 630,
      fonts,
    });

    const resvg = new Resvg(svg);
    const png = resvg.render().asPng();

    return new Response(new Uint8Array(png), {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      },
    });
  } catch (error) {
    console.error('OG image generation failed:', error);
    return new Response(`OG image generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`, {
      status: 500,
    });
  }
};

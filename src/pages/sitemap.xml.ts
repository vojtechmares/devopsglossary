import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { VALID_CATEGORIES } from '../lib/categories';

export const GET: APIRoute = async () => {
  const siteUrl = import.meta.env.SITE?.replace(/\/$/, '') ?? 'https://devopsglossary.com';
  const terms = await getCollection('terms');

  const urls = [
    // Homepage
    `<url><loc>${siteUrl}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`,
    // Term pages
    ...terms.map(
      (term) =>
        `<url><loc>${siteUrl}/glossary/${term.data.slug}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
    ),
    // Category pages
    ...VALID_CATEGORIES.map(
      (cat) =>
        `<url><loc>${siteUrl}/category/${cat}</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>`
    ),
    // Search page
    `<url><loc>${siteUrl}/search</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};

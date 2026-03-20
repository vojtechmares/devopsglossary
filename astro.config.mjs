// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://devopsglossary.com',
  output: 'server',
  trailingSlash: 'never',
  adapter: node({ mode: 'middleware' }),
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});

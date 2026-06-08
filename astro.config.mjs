// @ts-check
import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.devopsglossary.com",
  output: "static",
  trailingSlash: "never",
  redirects: {
    "/glossary": "/",
  },
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
  }),
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});

// @ts-check
import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.devopsglossary.com",
  output: "server",
  trailingSlash: "never",
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
  }),
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});

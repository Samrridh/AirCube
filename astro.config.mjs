// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // The `site` property specifies the base URL for your site.
  // Be sure to update this to your own domain (e.g., "https://yourdomain.com") before deploying.
  site: "https://aircube.spacedust.in", 
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true, // false maybe?
  },
  integrations: [
    react(),
    markdoc(),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});

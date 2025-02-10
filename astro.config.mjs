import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.amias.mx",
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" }), sitemap()],
});
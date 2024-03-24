import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.simplyzaki.com',
  integrations: [tailwind(), sitemap(), robotsTxt(), pagefind()]
});
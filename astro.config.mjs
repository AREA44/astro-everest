import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set the site and base option to deploy to GitHub Pages
  site: 'https://area44.github.io',
  base: '/astro-everest',
  integrations: [alpinejs(), tailwind()],
});

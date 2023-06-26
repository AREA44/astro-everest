import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://area44.github.io',
  base: '/astro-spaceships',
  integrations: [alpinejs(), tailwind()],
});

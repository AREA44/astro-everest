import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind()],
});

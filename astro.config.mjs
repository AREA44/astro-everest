import alpinejs from '@astrojs/alpinejs'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://area44.github.io' : 'http://localhost:3000',
  base: process.env.CI ? '/astro-everest/' : undefined,
  integrations: [alpinejs(), tailwind()],
})

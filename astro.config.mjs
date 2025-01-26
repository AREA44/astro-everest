// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? "https://area44.github.io" : "http://localhost:3000",
  base: process.env.CI ? "/astro-everest/" : undefined,
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
});

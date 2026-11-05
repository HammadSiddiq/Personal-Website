import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hammadsid.com',
  integrations: [sitemap()],
  redirects: {
    '/projects': '/games',
    '/projects/[slug]': '/games/[slug]',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

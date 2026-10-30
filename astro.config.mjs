import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://ryzerine.com',
  integrations: [sitemap()],
  fonts: [{
    provider: fontProviders.adobe({ id: 'yxa8yni' }),
    name: 'Neue Haas Grotesk Display',
    cssVariable: '--font-NHG-display',
    fallbacks: ['sans-serif'],
  }, {
    provider: fontProviders.adobe({ id: 'yxa8yni' }),
    name: 'Neue Haas Grotesk Text',
    cssVariable: '--font-NHG-text',
    fallbacks: ['sans-serif'],
  }],
  vite: {
    plugins: [tailwindcss()]
  }
});
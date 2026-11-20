import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { loadEnv } from 'vite';
const { ADOBE_FONTS_ID } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  '',
);
if (!ADOBE_FONTS_ID) {
  throw new Error('Missing ADOBE_FONTS_ID.');
}
const adobe = fontProviders.adobe({ id: ADOBE_FONTS_ID });
export default defineConfig({
  site: 'https://ryzerine.com',
  integrations: [sitemap(), icon()],
  fonts: [{
    provider: adobe,
    name: 'Neue Haas Grotesk Display',
    cssVariable: '--font-NHG-display',
    weights: [500],
    styles: ['normal'],
    fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
  }, {
    provider: adobe,
    name: 'Neue Haas Grotesk Text',
    cssVariable: '--font-NHG-text',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
  }],
  vite: {
    plugins: [tailwindcss()]
  }
});
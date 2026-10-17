// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio de producción. Se puede sobrescribir con SITE_URL y BASE_PATH
// (p. ej. para una vista previa en https://publifix.github.io con BASE_PATH=/arven-comercializadora).
const site = process.env.SITE_URL || 'https://arvenmexico.com';
const base = process.env.BASE_PATH || '/';

// Aviso de privacidad indexable. Si vuelve a ser borrador, poner false aquí
// y en src/config/site.ts (legal.privacyIndexable).
const PRIVACY_INDEXABLE = true;

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  output: 'static',
  build: {
    // Todo el CSS en línea: sin hojas de estilo que bloqueen el render.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // Solo páginas indexables.
      filter: (page) => !page.includes('/404') && (PRIVACY_INDEXABLE || !page.includes('/aviso-de-privacidad')),
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 1 }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

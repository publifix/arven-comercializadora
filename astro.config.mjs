// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio de producción. Se puede sobrescribir con SITE_URL y BASE_PATH
// (p. ej. para una vista previa en https://publifix.github.io con BASE_PATH=/arven-comercializadora).
const site = process.env.SITE_URL || 'https://arvenmexico.com';
const base = process.env.BASE_PATH || '/';

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
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

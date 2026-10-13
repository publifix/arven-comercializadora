// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio y ruta base: por defecto la vista previa en GitHub Pages.
// Para el dominio final: SITE_URL=https://arven.com.mx BASE_PATH=/ npm run build
const site = process.env.SITE_URL || 'https://publifix.github.io';
const base = process.env.BASE_PATH || '/arven-comercializadora';

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

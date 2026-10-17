import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const manifest = {
    name: 'ARVEN Comercial',
    short_name: 'ARVEN',
    description: 'Suministro industrial para plantas y corporativos en Querétaro y el Bajío.',
    lang: 'es-MX',
    start_url: base,
    scope: base,
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      { src: `${base}android-chrome-192x192.png`, sizes: '192x192', type: 'image/png' },
      { src: `${base}android-chrome-512x512.png`, sizes: '512x512', type: 'image/png' },
      { src: `${base}maskable-icon-512x512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};

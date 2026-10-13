import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="${base}mstile-150x150.png"/>
      <TileColor>#000000</TileColor>
    </tile>
  </msapplication>
</browserconfig>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

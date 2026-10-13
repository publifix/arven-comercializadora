# ARVEN Comercializadora · Landing page

Landing page de ARVEN Comercializadora (Querétaro): suministro industrial de EPP, calzado de seguridad, uniformes, herramienta y consumibles.

- **Vista previa:** https://publifix.github.io/arven-comercializadora/
- **Stack:** Astro (salida estática) · Tailwind CSS 4 · JavaScript mínimo
- **Despliegue:** GitHub Actions → GitHub Pages en cada push a `main` o `claude/**` (`.github/workflows/deploy.yml`)

## Desarrollo

```bash
npm ci
npm run dev       # http://localhost:4321/arven-comercializadora/
npm run build     # genera dist/
npm run preview
```

Requiere Node 22.12 o superior.

## Dónde está cada cosa

| Ruta | Contenido |
|------|-----------|
| `src/config/site.ts` | **Datos del cliente y placeholders** (teléfono, WhatsApp, correo, dirección, horario, cifras, redes, integraciones) |
| `src/content/copy.ts` | Textos literales del documento de textos |
| `src/styles/global.css` | Tokens del manual de marca (colores, tipografías) y componentes base |
| `src/layouts/BaseLayout.astro` | `<head>`: SEO, Open Graph, favicons, fuentes, JSON-LD, slot de GTM |
| `src/components/sections/` | Una sección de la landing por archivo |
| `src/lib/schema.ts` | Datos estructurados (Organization, LocalBusiness, WebSite, FAQPage) |
| `src/pages/` | Portada, aviso de privacidad, 404, robots.txt, site.webmanifest, browserconfig.xml |
| `src/assets/` | Fotografías y logotipos (se optimizan a AVIF/WebP en el build) |
| `public/` | Favicons, fuentes autoalojadas, imagen social `og-image.jpg` |
| `docs/` | Documento de textos y manual de identidad visual |

Los placeholders se localizan con `grep -n "\[" src/config/site.ts`.

## Variables de entorno

Se definen en GitHub: *Settings → Secrets and variables → Actions → Variables* (o en `.env` en local, ver `.env.example`).

| Variable | Uso |
|----------|-----|
| `PUBLIC_FORM_ENDPOINT` | Endpoint de Formspree del formulario (`https://formspree.io/f/<id>`). Sin él, el formulario muestra el mensaje de error y remite a WhatsApp. |
| `PUBLIC_GTM_ID` | ID de Google Tag Manager (`GTM-XXXXXXX`). Vacío = GTM desactivado. |
| `SITE_URL` / `BASE_PATH` | Dominio final. Para `arven.com.mx`: `SITE_URL=https://arven.com.mx` y `BASE_PATH=/`. |

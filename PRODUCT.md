# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (salida estática) + Tailwind CSS + JavaScript mínimo, definido por el cliente. Despliegue en GitHub Pages vía GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main` o `claude/**`. Dominio provisional: https://publifix.github.io/arven-comercializadora/ (dominio final por confirmar). Sitio sin backend: el contacto es por WhatsApp, teléfono y correo (sin formulario).

## Users

Responsables de Compras, Seguridad e Higiene y Mantenimiento de plantas industriales y corporativos en Querétaro y el Bajío (automotriz, aeroespacial, alimentos, manufactura, logística, construcción, oficinas). Llegan buscando un proveedor confiable para EPP, calzado de seguridad, uniformes, herramienta y consumibles; su trabajo es que la planta no se detenga por falta de suministro y que la compra sea controlable y facturable.

## Product Purpose

ARVEN Comercial (antes ARVEN Comercializadora; cambio de nombre oct. 2026) tiene cuatro líneas de negocio para la industria y los corporativos de Querétaro: distribución de insumos industriales, soluciones de cadena de suministro, tercerización de pagos y logística. La landing existe para convertir visitas en solicitudes de cotización por WhatsApp, teléfono o correo. Éxito: solicitudes de cotización calificadas de empresas.

## Positioning

"El socio de abastecimiento industrial más moderno de Querétaro": no solo vende productos, administra el suministro de la planta. Diferenciadores: enfoque en industria y corporativos; programas de abastecimiento (no solo venta por pedido); kits por puesto de trabajo; un solo proveedor, una sola factura, un ejecutivo asignado.

## Operating Context

Compras B2B con requisiciones, listas de productos, perfiles de puesto, alta como proveedor en portales corporativos, facturación CFDI 4.0, crédito empresarial, entregas en planta/almacén, cumplimiento NOM (NOM-017-STPS para EPP).

## Capabilities and Constraints

- Copy final y literal en `docs/ARVEN Comercializadora — Textos de la landing page.docx`; no se inventa, resume ni reescribe.
- Titular: Roberto Rivera Chapa, persona física con actividad empresarial (nombre comercial ARVEN Comercial). Sin placeholders pendientes; datos centralizados en `src/config/site.ts`.
- Cuatro líneas de negocio confirmadas por el cliente (oct. 2026). Contacto definitivo: WhatsApp y teléfono 442 186 6158, contacto@arvenmexico.com, Calle San Luis Potosí 14, Col. Hidalgo, Santiago de Querétaro, C.P. 76057. Sin redes sociales.

## Brand Commitments

- Manual de identidad visual v1.0 (`docs/Manual_de_identidad_visual_ARVEN.pdf`) manda en logos, colores y tipografías.
- Logos (oct. 2026): ARVEN COMERCIAL en `src/assets/brand/arven-comercial/`: A amarilla + blanco (fondos oscuros; navbar, menú y footer), A amarilla + grafito (fondos claros), monocromáticos blanco y negro; isotipo A en favicons. Logotipo completo mínimo 160 px de ancho; debajo de eso, isotipo.
- Paleta: Amarillo ARVEN #FFC20E (hover #E0A800, claro #FFF4CC), Grafito #1F1F1F, Negro #000000, Blanco, grises #3D3D3D #6B6B6B #BDBDBD #EDEDEB #F7F7F5. Proporción 60 % blanco/neutros, 30 % grafito, 10 % amarillo. Amarillo nunca como texto sobre blanco; texto sobre amarillo siempre grafito.
- Tipografía: Saira (titulares, botones, etiquetas, cifras) e Inter (texto).
- Personalidad: Confiable, Directa, Industrial, Ágil. Tono: directo, seguro y técnico sin ser frío; tutea en titulares y botones.
- Referencias de lenguaje visual (no copiar): fastenal.mx, robertshaw.com.

## Evidence on Hand

- Fotografías 16:9 (1280×720): `src/assets/photos/` (planta, anaqueles EPP, calzado, equipo con uniformes, logística en andén). No hay foto de "Asesoría en planta" ni fotos por sector industrial.
- No hay testimonios, logos de clientes, certificaciones, años de operación ni cantidad de productos: no se fabrican ni se mencionan.

## Product Principles

1. Continuidad operativa antes que catálogo: cada sección responde a "¿mi planta seguirá surtida?".
2. Una sola ruta a la cotización, visible en todo momento.
3. Sobriedad industrial: claridad de señalética, cero adorno sin función.
4. Ningún dato sin respaldo: lo no confirmado queda como placeholder visible.

## Accessibility & Inclusion

WCAG 2.1 AA: contraste ≥ 4.5:1, foco visible amarillo, navegación completa por teclado, textos alternativos descriptivos, respeto a prefers-reduced-motion. Meta Lighthouse ≥ 95 en las cuatro categorías, móvil y escritorio.

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (salida estática) + Tailwind CSS + JavaScript mínimo, definido por el cliente. Despliegue en GitHub Pages vía GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main` o `claude/**`. Dominio provisional: https://publifix.github.io/arven-comercializadora/ (dominio final por confirmar). Formulario de cotización vía Formspree, endpoint configurable con `PUBLIC_FORM_ENDPOINT`.

## Users

Responsables de Compras, Seguridad e Higiene y Mantenimiento de plantas industriales y corporativos en Querétaro y el Bajío (automotriz, aeroespacial, alimentos, manufactura, logística, construcción, oficinas). Llegan buscando un proveedor confiable para EPP, calzado de seguridad, uniformes, herramienta y consumibles; su trabajo es que la planta no se detenga por falta de suministro y que la compra sea controlable y facturable.

## Product Purpose

ARVEN Comercializadora abastece a la industria y a corporativos de Querétaro con insumos industriales. La landing existe para convertir visitas en solicitudes de cotización (formulario, WhatsApp, teléfono). Éxito: solicitudes de cotización calificadas de empresas.

## Positioning

"El socio de abastecimiento industrial más moderno de Querétaro": no solo vende productos, administra el suministro de la planta. Diferenciadores: enfoque en industria y corporativos; programas de abastecimiento (no solo venta por pedido); kits por puesto de trabajo; un solo proveedor, una sola factura, un ejecutivo asignado.

## Operating Context

Compras B2B con requisiciones, listas de productos, perfiles de puesto, alta como proveedor en portales corporativos, facturación CFDI 4.0, crédito empresarial, entregas en planta/almacén, cumplimiento NOM (NOM-017-STPS para EPP).

## Capabilities and Constraints

- Copy final y literal en `docs/ARVEN Comercializadora — Textos de la landing page.docx`; no se inventa, resume ni reescribe.
- Datos entre corchetes son placeholders pendientes del cliente (cifras, contacto, dirección, horario, pedido mínimo, redes, dominio, aviso de privacidad). Centralizados en `src/config/site.ts`.
- Soluciones ofrecidas hoy por confirmar con el cliente.

## Brand Commitments

- Manual de identidad visual v1.0 (`docs/Manual_de_identidad_visual_ARVEN.pdf`) manda en logos, colores y tipografías.
- Logos: V05-A positivo (fondos claros), V05-B negativo (fondos oscuros; navbar y footer negros), mono e isotipo. Logotipo completo mínimo 160 px de ancho; debajo de eso, isotipo.
- Paleta: Amarillo ARVEN #FFC20E (hover #E0A800, claro #FFF4CC), Grafito #1F1F1F, Negro #000000, Blanco, grises #3D3D3D #6B6B6B #BDBDBD #EDEDEB #F7F7F5. Proporción 60 % blanco/neutros, 30 % grafito, 10 % amarillo. Amarillo nunca como texto sobre blanco; texto sobre amarillo siempre grafito.
- Tipografía: Saira (titulares, botones, etiquetas, cifras) e Inter (texto).
- Personalidad: Confiable, Directa, Industrial, Ágil. Tono: directo, seguro y técnico sin ser frío; tutea en titulares y botones.
- Referencias de lenguaje visual (no copiar): fastenal.mx, robertshaw.com.

## Evidence on Hand

- Fotografías 16:9 (1280×720): `src/assets/photos/` (planta, anaqueles EPP, calzado, equipo con uniformes, logística en andén). No hay foto de "Asesoría en planta" ni fotos por sector industrial.
- No hay testimonios, logos de clientes, certificaciones ni cifras confirmadas: no se fabrican.

## Product Principles

1. Continuidad operativa antes que catálogo: cada sección responde a "¿mi planta seguirá surtida?".
2. Una sola ruta a la cotización, visible en todo momento.
3. Sobriedad industrial: claridad de señalética, cero adorno sin función.
4. Ningún dato sin respaldo: lo no confirmado queda como placeholder visible.

## Accessibility & Inclusion

WCAG 2.1 AA: contraste ≥ 4.5:1, foco visible amarillo, navegación completa por teclado, textos alternativos descriptivos, respeto a prefers-reduced-motion. Meta Lighthouse ≥ 95 en las cuatro categorías, móvil y escritorio.

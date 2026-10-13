---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface: Landing page ARVEN (src/pages/index.astro)

Mode: Persuade. Visitor: comprador industrial (Compras / Seguridad e Higiene / Mantenimiento). Action: solicitar cotización (formulario, WhatsApp, teléfono). Proof on hand: copy del cliente y fotografía propia; cifras pendientes como placeholders.

Section order, copy and component forms are pinned by the client brief (barra de utilidad, navbar negro, hero, barra de confianza, productos 4×2, soluciones split, industrias con foto, por qué ARVEN grafito, stepper 4 pasos, nosotros, banda CTA con 3 accesos, formulario + mapa, FAQ, footer negro, WhatsApp flotante). Eyebrow labels are kept because the client copy and the brand manual's web hierarchy both specify "etiqueta superior".

## Direction contract

THESIS: La landing se lee como señalética de piso de planta: carriles amarillos que marcan el camino del comprador hacia la cotización. Rechaza la plantilla corporativa azul de proveedor genérico y el "catálogo infinito" de la competencia local.

OWN-WORLD: Blanco y #F7F7F5 como piso, grafito y negro como estructura, amarillo ARVEN solo como marca de carril, acción y acento (10 %). Saira Bold mayúsculas para titulares tipo rótulo; Inter para lectura. Esquinas casi rectas (2 px), líneas de 1 px #EDEDEB, íconos Lucide de trazo 1.75. Cifras en Saira tabular.

STORY: Entiende en un pantallazo que ARVEN surte todo lo que su planta consume; cree que es un sistema (soluciones, ejecutivo, pasos) y no un catálogo; actúa por el formulario precargado según su tipo de compra.

FIRST VIEWPORT: Foto de planta a sangre, degradado negro desde la izquierda; etiqueta, H1 Saira 56 px en mayúsculas a la izquierda (≤ 13 ch por línea), subtítulo Inter 18 px, botón amarillo "Solicitar cotización" + secundario contorno blanco. Una franja de carril amarillo de 4 px nace bajo el H1. La barra de confianza negra asoma al pie del primer pantallazo.

FORM: Carril de piso (floor-marking lane). Posición 1 de 1: estructura fijada por el brief del cliente. seed: none (world and structure pinned by brand manual and client brief).

SIGNATURE: El carril amarillo: una línea que se dibuja (scaleX) bajo cada titular al entrar en pantalla y que en "Cómo trabajamos" se convierte en el carril que une los 4 pasos; estático con prefers-reduced-motion.

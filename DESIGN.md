---
name: ARVEN Comercial
description: Abastecimiento industrial para plantas y corporativos de Querétaro; señalética de piso de planta llevada a la web.
colors:
  amarillo: "#ffc20e"
  amarillo-hover: "#e0a800"
  amarillo-claro: "#fff4cc"
  grafito: "#1f1f1f"
  negro: "#000000"
  blanco: "#ffffff"
  gris-700: "#3d3d3d"
  gris-500: "#6b6b6b"
  gris-300: "#bdbdbd"
  gris-100: "#ededeb"
  gris-50: "#f7f7f5"
  error: "#c62828"
  exito: "#2e7d32"
  info: "#1565c0"
typography:
  display:
    fontFamily: "Saira, 'Saira Fallback', Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Saira, 'Saira Fallback', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Saira, 'Saira Fallback', Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Inter, 'Inter Fallback', Arial, Helvetica, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter, 'Inter Fallback', Arial, Helvetica, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Saira, 'Saira Fallback', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  button:
    fontFamily: "Saira, 'Saira Fallback', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
  figure:
    fontFamily: "Saira, 'Saira Fallback', Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
rounded:
  xs: "2px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  section-sm: "64px"
  section-md: "96px"
  section-lg: "112px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.grafito}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.amarillo-hover}"
    textColor: "{colors.grafito}"
  button-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.grafito}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "12px 24px"
    height: "48px"
  button-outline-dark-hover:
    backgroundColor: "{colors.grafito}"
    textColor: "{colors.blanco}"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.blanco}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: "12px 24px"
    height: "48px"
  button-outline-light-hover:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.grafito}"
  input:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.grafito}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: "12px 16px"
  choice-tile:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.grafito}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "0 14px"
    height: "48px"
  choice-tile-checked:
    backgroundColor: "{colors.amarillo-claro}"
    textColor: "{colors.grafito}"
  nav-bar:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    height: "72px"
  step-marker:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.grafito}"
    typography: "{typography.figure}"
    size: "48px"
  lane:
    backgroundColor: "{colors.amarillo}"
    height: "4px"
    width: "72px"
---

# Design System: ARVEN Comercial

## Overview

**Creative North Star: "El carril de piso de planta"**

El sistema se lee como la señalética pintada en el piso de una nave industrial: superficies blancas y gris piedra como piso, grafito y negro como estructura, y el amarillo ARVEN como la marca de carril que dice por dónde se camina. Cada sección guía al comprador hacia la cotización con la misma claridad con que un marcaje guía a un montacargas. Nada es decorativo; cada línea amarilla señala un camino, una acción o un dato.

La densidad es media y ordenada: retículas de celdas separadas por líneas de 1 px, titulares Saira compactos y lectura Inter con aire. El ritmo alterna bandas claras (blanco, #F7F7F5) con bandas grafito y negras de peso estructural; la fotografía propia de planta entra a sangre bajo degradados negros que garantizan la lectura. El Manual de identidad visual v1.0 manda sobre logos, colores y tipografías; este documento registra cómo aterrizó en la web.

Se rechaza la plantilla corporativa azul de proveedor genérico y el "catálogo infinito": el sistema se presenta como un servicio de suministro, no como un escaparate.

**Key Characteristics:**
- Amarillo como marca de carril, acción y acento, nunca como relleno de fondo de sección clara.
- Esquinas casi rectas (2 px) y líneas de 1 px; sin tarjetas flotantes.
- Saira para titulares, botones, etiquetas y cifras; Inter para lectura.
- Bandas alternas claro / grafito / negro como estructura de página.
- Íconos de línea Lucide con trazo 1.75, siempre en un solo color.
- Movimiento mínimo: el carril se dibuja al entrar en pantalla y nada más.

## Colors

Paleta de señalética industrial: neutros cálidos de piso, grafito estructural y un único amarillo de seguridad que marca el camino.

### Primary
- **Amarillo ARVEN** (amarillo): botón primario, carriles, marcadores de paso, íconos sobre fondos oscuros, anillo de foco, selección de texto y el botón flotante de WhatsApp. Sobre grafito o negro también puede ser color de titular de cierre (banda CTA, frase final de "Por qué ARVEN").
- **Amarillo Profundo** (amarillo-hover): solo estado hover del botón primario y del botón flotante.
- **Amarillo Claro** (amarillo-claro): fondo de avisos de borrador; nunca como fondo de sección.

### Neutral
- **Grafito** (grafito): color de texto por defecto, fondo de bandas estructurales ("Por qué ARVEN", barra de confianza, banda CTA, cabecera de páginas internas, ficha de contacto) y borde del botón de contorno oscuro.
- **Negro Nave** (negro): barra de utilidad, navbar, menú móvil y footer; base de los degradados sobre fotografía.
- **Blanco** (blanco): piso principal de lectura y fondo de celdas de retícula.
- **Gris Piedra** (gris-50): banda clara alterna (Soluciones, Nosotros, FAQ) y franjas de nota.
- **Gris Línea** (gris-100): líneas de retícula de 1 px y fondo del mapa diferido.
- **Gris Medio** (gris-300): bordes de campos y separadores de listas sobre claro; texto secundario sobre oscuro.
- **Gris Acero** (gris-500): placeholders, ayudas de campo y hover de bordes.
- **Gris Carbón** (gris-700): texto secundario sobre blanco y divisores sobre grafito.

### Funcionales
- **Error** (error), **Éxito** (exito), **Info** (info): solo web, reservados para estados funcionales (hoy el sitio no tiene formularios). Nunca decorativos.

### Named Rules
**The Carril Rule.** El amarillo ocupa alrededor del 10 % de cualquier pantalla (proporción del manual 60 % neutros / 30 % grafito / 10 % amarillo). Si una banda clara empieza a verse amarilla, sobra amarillo.

**The Grafito-on-Yellow Rule.** El texto sobre amarillo siempre es grafito; el amarillo nunca es texto sobre blanco ni sobre gris claro. Como texto, el amarillo solo vive sobre grafito o negro.

## Typography

**Display Font:** Saira (con Saira Fallback métrico sobre Arial)
**Body Font:** Inter (con Inter Fallback métrico sobre Arial, Helvetica)

**Character:** Saira aporta el trazo técnico y cuadrado afín al descriptor del logo; Inter sostiene la lectura con neutralidad. Ambas se sirven en local como fuentes variables.

### Hierarchy
- **Display / H1** (700, 36 px móvil a 56 px escritorio, interlineado 1.05 a 1.08, -0.01em, MAYÚSCULAS): un solo titular por página, máximo unos 16 caracteres por línea en escritorio.
- **Headline / H2** (700, 28 px a 40 px, 1.15, -0.01em, tipo oración): titular de sección, siempre seguido del carril.
- **Title / H3** (600, 18 a 24 px, 1.25): títulos de celda, paso, pregunta frecuente e industria.
- **Body** (400, 16 px móvil / 17 px escritorio, 1.6): lectura general; intro de sección a 18 px. Respuestas largas limitadas a 62ch.
- **Body pequeño** (400, 15 px, 1.6): texto de celdas, listas y footer.
- **Label / Etiqueta superior** (600, 12 a 14 px, 0.08em, MAYÚSCULAS): etiqueta sobre el H2 y rótulos de columna del footer y de la ficha de contacto.
- **Botón** (600, 15 a 16 px, 0.04em, MAYÚSCULAS).
- **Cifra** (700, 26 a 28 px, numerales tabulares): datos de la barra de confianza, números de paso y el 404.

### Named Rules
**The Dos Voces Rule.** Saira habla (titulares, botones, etiquetas, menú, cifras); Inter explica (párrafos, campos, listas). Nunca un párrafo en Saira ni un botón en Inter.

**The Mayúsculas Medidas Rule.** Solo H1, botones, etiquetas superiores y rótulos van en mayúsculas. El H2 va en tipo oración, como en la lámina 07 del manual.

## Layout

Contenedor centrado de 1280 px como máximo con márgenes laterales de 16 / 24 / 32 px según ancho. Las secciones respiran con 64 px de relleno vertical en móvil, 96 px en tablet y 112 px en escritorio. Las bandas van a sangre completa y el contenido se alinea siempre al contenedor.

La composición de escritorio es mayormente de dos columnas asimétricas (proporciones cercanas a 1 : 1.05, 0.8 : 1.2, 1.5 : 1) con el encabezado de sección a un lado y la evidencia (foto, lista, tarjetas de contacto) al otro; en móvil todo se apila en una columna. Las colecciones usan retículas de celdas de 2 y 4 columnas. Los encabezados de sección se limitan a unos 46 rem de ancho. Breakpoints de Tailwind más uno propio a 480 px (xs) para la barra de confianza. Navbar fija de 72 px con `scroll-padding-top` que la compensa.

## Elevation & Depth

Sistema plano. La profundidad se construye con bandas de color (blanco, gris piedra, grafito, negro), con líneas de 1 px y con fotografía bajo degradados negros, no con sombras. La única sombra del sitio pertenece al botón flotante de WhatsApp, que necesita despegarse del contenido que tapa.

### Shadow Vocabulary
- **Flotante** (`box-shadow: 0 8px 24px -6px rgb(0 0 0 / 0.45)`): exclusivo del botón flotante de WhatsApp.

### Named Rules
**The Piso Plano Rule.** Las superficies no se elevan. Si un bloque necesita distinguirse, cambia de banda o lleva una línea de 1 px, nunca una sombra.

**The Degradado de Lectura Rule.** Toda fotografía con texto encima lleva degradado negro (desde la izquierda en escritorio, desde abajo en móvil, 0.9 o más de opacidad bajo el texto) o un velo grafito al 85 %.

## Shapes

Esquinas casi rectas: 2 px en botones, campos y casillas; las celdas, fotos, bandas y marcadores de paso son de esquina viva. El círculo existe una sola vez, en el botón flotante de WhatsApp. Las divisiones se dibujan con retículas de líneas de 1 px (técnica de `gap` de 1 px sobre fondo gris línea) y con filetes superiores de 2 px grafito en las fichas de Misión y Visión. La forma firma es el carril: una barra amarilla de 4 px de alto y 72 px de ancho que nace alineada a la izquierda bajo cada titular; en "Cómo trabajamos" se extiende a lo ancho para unir los pasos y en Soluciones subraya la foto a 6 px.

## Components

### Buttons
Directos y de un solo golpe, como un letrero de acción.
- **Shape:** esquina casi recta (2 px), altura mínima 48 px.
- **Primary:** fondo amarillo, texto grafito, Saira SemiBold en mayúsculas (12 px por 24 px). Puede llevar flecha Lucide a la derecha.
- **Hover / Focus:** hover a amarillo profundo; transición de 180 ms con curva expo de salida; al presionar baja 1 px. Foco: contorno amarillo de 3 px separado 2 px, con anillo grafito de 2 px para que se vea también sobre amarillo.
- **Contorno oscuro:** borde grafito de 2 px sobre claro; en hover se rellena de grafito con texto blanco.
- **Contorno claro:** borde blanco de 2 px sobre fotografía u oscuro; en hover se rellena de blanco con texto grafito.

### Cards / Containers
- **Corner Style:** esquina viva.
- **Background:** celdas blancas dentro de una retícula de líneas gris línea; celdas de industria con foto a sangre y degradado; ficha de contacto en grafito.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** 1 px gris línea en retículas; 1 px gris carbón entre celdas sobre grafito.
- **Internal Padding:** 24 a 28 px.

### Inputs / Fields
- **Style:** fondo blanco, borde de 1 px gris medio, esquina 2 px, 12 por 16 px de relleno; etiqueta en Saira SemiBold de 15 px encima.
- **Focus:** el borde pasa a grafito; foco visible amarillo global.
- **Error / Disabled:** borde y mensaje en rojo de error; asterisco de obligatorio en rojo. Botón de envío deshabilitado al 70 % con cursor de espera.
- **Casillas de opción:** losetas de 48 px con borde gris medio; marcadas, borde grafito y fondo amarillo claro.
- **Adjuntar archivo:** zona de borde punteado con botón interno grafito en Saira mayúsculas.

### Navigation
- **Style:** barra de utilidad negra de 40 px (solo escritorio) con teléfono, WhatsApp y horario en gris medio con íconos amarillos; navbar negra fija de 72 px con logo ARVEN COMERCIAL (A amarilla + blanco), enlaces Saira SemiBold de 15 px en blanco y botón primario compacto.
- **States:** enlaces y controles pasan a amarillo en hover.
- **Mobile:** menú en `<dialog>` negro a pantalla completa, enlaces Saira Bold de 28 px en mayúsculas con flecha amarilla y divisores gris carbón; botón primario y de contorno claro a todo el ancho al pie.

### Etiqueta superior
Etiqueta en Saira SemiBold mayúsculas (0.08em) precedida por una barra amarilla de 4 px de ancho y 1em de alto, igual que los encabezados de lámina del manual. Gris carbón sobre claro, gris medio sobre oscuro, blanco sobre foto. Solo aparece encima de un H2 de sección y su texto proviene de la copia del cliente.

### Encabezado de sección
Etiqueta superior, H2 y carril, con intro opcional en tamaño lead; el carril se dibuja de izquierda a derecha (scaleX, 900 ms, curva expo de salida) al entrar en pantalla y queda estático con `prefers-reduced-motion`.

### Stepper de carril
Marcadores cuadrados amarillos de 48 px con número Saira tabular en grafito, unidos por un carril horizontal de 4 px en escritorio y vertical en móvil.

### Barra de confianza
Banda grafito con cuatro cifras en Saira tabular, ícono de línea amarillo y descripción en gris medio, separadas por líneas gris carbón.

### FAQ
Acordeón de `<details>` sobre gris piedra, con divisores gris medio; el control es un cuadrado grafito de 36 px con un más amarillo que gira 45 grados al abrir.

## Do's and Don'ts

### Do:
- **Do** cerrar cada H2 de sección con el carril amarillo (4 px por 72 px), alineado a la izquierda.
- **Do** poner texto grafito sobre cualquier fondo amarillo o amarillo claro.
- **Do** separar celdas con líneas de 1 px gris línea en lugar de sombras o tarjetas.
- **Do** usar íconos Lucide de línea con trazo 1.75, en grafito sobre claro y en amarillo sobre oscuro.
- **Do** escribir cifras en Saira con numerales tabulares.
- **Do** cubrir la fotografía con degradado negro o velo grafito antes de poner texto encima.
- **Do** respetar el logotipo completo a 160 px de ancho mínimo; por debajo, isotipo. Negativo sobre negro y grafito, positivo sobre claro.

### Don't:
- **Don't** usar el amarillo como texto sobre blanco o gris claro.
- **Don't** añadir sombras a celdas, botones o paneles; la única sombra es la del botón flotante.
- **Don't** redondear más de 2 px ni introducir píldoras, salvo el botón flotante circular.
- **Don't** usar azules corporativos ni colores fuera del manual; error, éxito e info son solo funcionales.
- **Don't** inventar etiquetas superiores: solo las que trae la copia del cliente, una por encabezado de sección.
- **Don't** escribir el H2 en mayúsculas; la mayúscula es para H1, botones y etiquetas.

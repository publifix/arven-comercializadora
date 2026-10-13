/**
 * Configuración central del sitio ARVEN Comercializadora.
 *
 * Todos los datos entre corchetes [ ] son PLACEHOLDERS que debe confirmar el
 * cliente antes de publicar. Búscalos con: grep -n "\[" src/config/site.ts
 */

export const site = {
  name: 'ARVEN Comercializadora',
  legalName: '[Razón social de ARVEN Comercializadora]',
  /** Dominio final. La URL efectiva se toma de astro.config (SITE_URL + BASE_PATH). */
  domain: '[arven.com.mx]',
  locale: 'es_MX',

  seo: {
    title: 'ARVEN | Proveedor de insumos industriales en Querétaro',
    description:
      'EPP, calzado de seguridad, uniformes, herramienta y consumibles para industria y corporativos en Querétaro. Un proveedor, entregas puntuales. Cotiza hoy.',
  },

  contact: {
    /** Texto visible */
    phoneDisplay: '[442 000 0000]',
    /** Formato E.164 para enlaces tel: y datos estructurados */
    phoneE164: '+524420000000',
    whatsappDisplay: '[442 000 0000]',
    /** Solo dígitos con lada de país, para wa.me */
    whatsappNumber: '524420000000',
    whatsappMessage: 'Hola, me interesa cotizar insumos para mi empresa.',
    email: '[ventas@arven.com.mx]',
    /** Correo real para el enlace mailto: (sin corchetes) */
    emailHref: 'ventas@arven.com.mx',
  },

  address: {
    street: '[Calle, número, colonia]',
    city: 'Querétaro',
    region: 'Qro.',
    regionCode: 'QRO',
    postalCode: '[76000]',
    country: 'MX',
    /** Coordenadas para el mapa y LocalBusiness (centro de Querétaro como placeholder) */
    lat: 20.5888,
    lng: -100.3899,
    /** Consulta del mapa embebido */
    mapQuery: 'Querétaro, Qro., México',
  },

  hours: {
    weekdays: '[8:00 a 18:00]',
    saturday: '[9:00 a 14:00]',
    /** Para datos estructurados (formato 24 h) */
    schema: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
      { days: ['Saturday'], opens: '09:00', closes: '14:00' },
    ],
  },

  /** Cifras de la barra de confianza */
  stats: {
    years: '[X]',
    products: '[X]',
    deliveryHours: '[24–48]',
    quoteHours: '[24]',
  },

  /** Pedido mínimo para entrega sin costo (FAQ) */
  minimumOrder: '[$X]',

  /** Redes sociales: deja la cadena vacía para mostrar el nombre sin enlace */
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
  },

  legal: {
    year: 2026,
    /** URL de Términos y condiciones; vacío = se muestra el texto sin enlace */
    termsUrl: '',
  },

  integrations: {
    /** Formspree: https://formspree.io/f/<id>. Se define con PUBLIC_FORM_ENDPOINT. */
    formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
    /** Google Tag Manager desactivado por defecto. Se activa con PUBLIC_GTM_ID. */
    gtmId: import.meta.env.PUBLIC_GTM_ID ?? '',
  },
} as const;

export const whatsappHref = `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;
export const telHref = `tel:${site.contact.phoneE164}`;
export const mailHref = `mailto:${site.contact.emailHref}`;
export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region}`;

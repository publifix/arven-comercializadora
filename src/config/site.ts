/**
 * Configuración central del sitio ARVEN Comercial.
 *
 * Los datos entre corchetes [ ] son PLACEHOLDERS que debe confirmar el
 * cliente antes de publicar. Búscalos con: grep -n "\[" src/config/site.ts
 */

export const site = {
  name: 'ARVEN Comercial',
  legalName: '[Razón social de ARVEN Comercial]',
  /** Dominio final. La URL efectiva se toma de astro.config (SITE_URL + BASE_PATH). */
  domain: 'arvenmexico.com',
  locale: 'es_MX',

  seo: {
    title: 'ARVEN | Insumos industriales y logística en Querétaro',
    description:
      'Distribución de insumos industriales, soluciones de cadena de suministro, tercerización de pagos y logística para industria y corporativos en Querétaro.',
  },

  contact: {
    /** Texto visible del teléfono y WhatsApp */
    phoneDisplay: '442 186 6158',
    /** Formato E.164 para enlaces tel: y datos estructurados */
    phoneE164: '+524421866158',
    whatsappDisplay: '442 186 6158',
    /** Solo dígitos con lada de país, para wa.me */
    whatsappNumber: '524421866158',
    whatsappMessage: 'Hola, me interesa cotizar insumos para mi empresa.',
    email: 'contacto@arvenmexico.com',
    emailSubject: 'Solicitud de cotización',
  },

  address: {
    street: 'Calle San Luis Potosí 14, Colonia Hidalgo (Barrio de San Francisquito)',
    city: 'Santiago de Querétaro',
    region: 'Qro.',
    regionCode: 'QRO',
    postalCode: '76057',
    country: 'MX',
  },

  hours: {
    // Espacios de no separación antes de la «h» para que no quede sola al final de línea
    display: 'Lunes a viernes de 8:00 a 18:00\u00a0h, sábados de 9:00 a 14:00\u00a0h',
    /** Para datos estructurados (formato 24 h) */
    schema: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
      { days: ['Saturday'], opens: '09:00', closes: '14:00' },
    ],
  },

  legal: {
    year: 2026,
    /** URL de Términos y condiciones; vacío = se muestra el texto sin enlace */
    termsUrl: '',
  },

  integrations: {
    /** Google Tag Manager desactivado por defecto. Se activa con PUBLIC_GTM_ID. */
    gtmId: import.meta.env.PUBLIC_GTM_ID || '',
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region}, C.P. ${site.address.postalCode}`;

/** Enlace de WhatsApp con mensaje precargado */
export const waLink = (message: string = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
export const whatsappHref = waLink();
export const telHref = `tel:${site.contact.phoneE164}`;
export const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.emailSubject)}`;
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`;
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

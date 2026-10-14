import { site, directionsHref as mapUrl } from '../config/site';
import { faq } from '../content/copy';

/** Datos estructurados JSON-LD: Organization, LocalBusiness, WebSite y FAQPage. */
export function buildJsonLd(siteUrl: URL, baseUrl: string) {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const home = new URL(base, siteUrl).href;
  const abs = (p: string) => new URL(`${base}${p}`, siteUrl).href;
  const orgId = `${home}#organization`;

  const contactPoint = [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: site.contact.phoneE164,
      email: site.contact.email,
      areaServed: 'MX',
      availableLanguage: ['es'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: `+${site.contact.whatsappNumber}`,
      areaServed: 'MX',
      availableLanguage: ['es'],
    },
  ];

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: site.name,
    legalName: site.legalName,
    url: home,
    logo: abs('android-chrome-512x512.png'),
    image: abs('og-image.jpg'),
    description: site.seo.description,
    email: site.contact.email,
    telephone: site.contact.phoneE164,
    contactPoint,
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${home}#localbusiness`,
    name: site.name,
    parentOrganization: { '@id': orgId },
    url: home,
    image: abs('og-image.jpg'),
    logo: abs('android-chrome-512x512.png'),
    description: site.seo.description,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.regionCode,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasMap: mapUrl,
    areaServed: [
      { '@type': 'City', name: 'Santiago de Querétaro' },
      { '@type': 'AdministrativeArea', name: 'Bajío' },
    ],
    openingHoursSpecification: site.hours.schema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint,
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${home}#website`,
    url: home,
    name: site.name,
    inLanguage: 'es-MX',
    publisher: { '@id': orgId },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${home}#faq`,
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return [organization, localBusiness, website, faqPage];
}

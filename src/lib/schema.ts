import { site } from '../data/site';
import { services } from '../data/services';

const abs = (p: string) => new URL(p, site.url).toString();
export const ORG_ID = `${site.url}/#klinika`;
export const PHARMACY_ID = `${site.url}/#vaistine`;

const hoursSpec = site.hours
  .filter((h) => h.days.length)
  .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes }));

const address = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  postalCode: site.address.postalCode,
  addressRegion: 'Kauno apskritis',
  addressCountry: site.address.country,
};

export function clinicSchema() {
  return {
    '@type': ['VeterinaryCare', 'LocalBusiness'],
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: `${site.url}/`,
    logo: abs('/logo.svg'),
    image: abs('/og-image.jpg'),
    telephone: site.phone.intl,
    email: site.email,
    address,
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: 'https://www.google.com/maps?q=Vaidoto+g.+97,+Kaunas',
    openingHoursSpecification: hoursSpec,
    areaServed: [
      { '@type': 'City', name: 'Kaunas' },
      { '@type': 'Place', name: 'Panemunė, Kaunas' },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: site.phone.intl, contactType: 'customer service', availableLanguage: ['lt'] },
      { '@type': 'ContactPoint', telephone: site.mobile.intl, contactType: 'emergency', availableLanguage: ['lt'], hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' } },
    ],
    sameAs: [site.facebook],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Veterinarijos paslaugos',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: abs(`/paslaugos/${s.slug}/`) },
      })),
    },
    department: { '@id': PHARMACY_ID },
  };
}

export function pharmacySchema() {
  return {
    '@type': 'Pharmacy',
    '@id': PHARMACY_ID,
    name: `${site.name} – veterinarinė vaistinė`,
    url: abs('/vaistine/'),
    telephone: site.phone.intl,
    email: site.email,
    address,
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: hoursSpec,
    parentOrganization: { '@id': ORG_ID },
  };
}

export function websiteSchema() {
  return { '@type': 'WebSite', '@id': `${site.url}/#website`, url: `${site.url}/`, name: site.name, inLanguage: 'lt-LT', publisher: { '@id': ORG_ID } };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.href) })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export { abs };

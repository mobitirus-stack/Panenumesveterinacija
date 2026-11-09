// Vienas šaltinis visiems NAP duomenims – naudojamas header, footer, kontaktuose ir schema.org.
export const site = {
  name: 'Panemunės veterinarija',
  legalName: 'UAB „Panemunės veterinarija“',
  url: 'https://www.panemunesveterinarija.lt',
  tagline: 'Veterinarijos klinika ir vaistinė Kaune, Panemunėje',
  description:
    'Panemunės veterinarija – veterinarijos klinika ir veterinarinė vaistinė Kaune, Vaidoto g. 97. Profilaktika, vakcinacija, chirurgija, tyrimai, skubi pagalba visą parą ir iškvietimai į namus.',
  address: {
    street: 'Vaidoto g. 97',
    city: 'Kaunas',
    district: 'Panemunė',
    postalCode: 'LT-45389',
    country: 'LT',
    full: 'Vaidoto g. 97, LT-45389 Kaunas',
  },
  geo: { lat: 54.863834, lng: 23.964727 },
  phone: { display: '8 37 207 134', href: 'tel:+37037207134', intl: '+370 37 207 134' },
  mobile: { display: '+370 673 36367', href: 'tel:+37067336367', intl: '+370 673 36367' },
  email: 'info@panemunesveterinarija.lt',
  skype: 'panemunesveterinarija',
  facebook: 'https://www.facebook.com/pages/Panemun%C4%97s-Veterinarija/433034336838890',
  hours: [
    { label: 'Pirmadienis–penktadienis', short: 'I–V', time: '10:00–19:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' },
    { label: 'Šeštadienis', short: 'VI', time: '9:00–15:00', days: ['Saturday'], opens: '09:00', closes: '15:00' },
    { label: 'Sekmadienis', short: 'VII', time: 'Nedirbame', days: [], opens: '', closes: '' },
  ],
  emergency: 'Skubūs iškvietimai – visą parą',
  mapEmbed: 'https://www.google.com/maps?q=Vaidoto+g.+97,+Kaunas&hl=lt&z=16&output=embed',
  mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Vaidoto+g.+97,+Kaunas',
};

export const nav = [
  { href: '/apie-mus/', label: 'Apie mus' },
  { href: '/paslaugos/', label: 'Paslaugos' },
  { href: '/kainos/', label: 'Kainos' },
  { href: '/vaistine/', label: 'Vaistinė' },
  { href: '/parduotuve/', label: 'Parduotuvė' },
  { href: '/galerija/', label: 'Galerija' },
  { href: '/blog/', label: 'Blogas' },
  { href: '/kontaktai/', label: 'Kontaktai' },
];

export const topbar = [
  { href: '/', label: 'Veterinarijos klinika', short: 'Klinika' },
  { href: '/vaistine/', label: 'Veterinarinė vaistinė', short: 'Vaistinė' },
  { href: '/parduotuve/', label: 'Internetinė parduotuvė', short: 'Parduotuvė' },
];

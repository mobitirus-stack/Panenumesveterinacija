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
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2060.02590419423!2d23.9647269!3d54.863837999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e722c6cd580ea3%3A0xb07d5ccff4a5b12d!2sPanemun%C4%97s%20veterinarija%2C%20UAB!5e1!3m2!1slt!2slt!4v1794251653901!5m2!1slt!2slt',
  mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Vaidoto+g.+97,+Kaunas',
};

export const nav = [
  { href: '/apie-mus/', label: 'Apie mus' },
  { href: '/paslaugos/', label: 'Paslaugos' },
  { href: '/kainos/', label: 'Kainos' },
  { href: '/vaistine/', label: 'Vaistinė' },
  { href: '/galerija/', label: 'Galerija' },
  { href: '/blog/', label: 'Blogas' },
  { href: '/kontaktai/', label: 'Kontaktai' },
];

export const topbar = [
  { href: '/', label: 'Veterinarijos klinika', short: 'Klinika' },
  { href: '/vaistine/', label: 'Veterinarinė vaistinė', short: 'Vaistinė' },
];

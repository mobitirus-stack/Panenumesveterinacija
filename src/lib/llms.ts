import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { services } from '../data/services';
import { generalFaq } from '../data/faq';

export async function llmsText() {
  const posts = await getCollection('blog');
  const u = (p: string) => `${site.url}${p}`;
  return `# ${site.name}

> ${site.description}

## Pagrindinė informacija
- Pavadinimas: ${site.legalName}
- Tipas: veterinarijos klinika ir veterinarinė vaistinė
- Adresas: ${site.address.full} (Panemunės mikrorajonas)
- Koordinatės: ${site.geo.lat}, ${site.geo.lng}
- Telefonas (registracija): ${site.phone.intl}
- Mobilusis, skubi pagalba 24/7: ${site.mobile.intl}
- El. paštas: ${site.email}
- Darbo laikas: ${site.hours.map((h) => `${h.label} ${h.time}`).join('; ')}
- Skubiais atvejais: visą parą
- Iškvietimai į namus: taip, Kaune
- Gydomi gyvūnai: šunys, katės, triušiai, šinšilos, jūrų kiaulytės ir kiti graužikai; konsultacijos dėl ūkio gyvūnų
- Facebook: ${site.facebook}

## Paslaugos
${services.map((s) => `- [${s.title}](${u(`/paslaugos/${s.slug}/`)}): ${s.short}`).join('\n')}

## Veterinarinė vaistinė
- [Vaistinė](${u('/vaistine/')}): veterinariniai ir homeopatiniai vaistai, pašarai, antiparazitinės ir priežiūros priemonės. Veikia kartu su klinika.
- [Internetinė parduotuvė](${u('/parduotuve/')}): užsakymai telefonu ir el. paštu, atsiėmimas klinikoje.

## Kiti puslapiai
- [Apie mus](${u('/apie-mus/')})
- [Kainos](${u('/kainos/')})
- [Keliaujantiems su augintiniu](${u('/keliaujantiems/')})
- [Kontaktai ir žemėlapis](${u('/kontaktai/')})
- [Blogas](${u('/blog/')})

## Dažni klausimai
${generalFaq.map((f) => `- K: ${f.q}\n  A: ${f.a}`).join('\n')}

## Blogo straipsniai
${posts.map((p) => `- [${p.data.title}](${u(`/blog/${p.id}/`)}): ${p.data.description}`).join('\n')}
`;
}

# Panemunės veterinarija – svetainė (demo)

Nauja **panemunesveterinarija.lt** svetainė. Dizainas paremtas Ortovet svetaine, turinys – Panemunės veterinarijos.

## Technologija
- **Astro 5** (statinis generavimas – kiekvienas puslapis atskiras pilnas HTML, gerai SEO/GEO/AEO)
- Be UI framework'ų, minimalus JS (meniu, lightbox, animacijos)
- Šriftas Outfit (self-hosted per `@fontsource-variable/outfit`)
- Nuotraukos optimizuojamos automatiškai (`astro:assets`, WebP, responsive)
- Build išvestis: `public_html/` (Vercel `outputDirectory`)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> public_html/
```

## Kur keisti turinį
| Ką | Failas |
|---|---|
| Kontaktai, adresas, telefonai, darbo laikas, koordinatės | `src/data/site.ts` |
| Paslaugos (tekstai, DUK, žingsniai, susijusios) | `src/data/services.ts` |
| Bendri DUK (pagrindinis, kontaktai) | `src/data/faq.ts` |
| Blogo įrašai (Markdown) | `src/content/blog/*.md` |
| Nuotraukos | `src/assets/img/` (vardas be plėtinio naudojamas kode) |
| Spalvos, bendras stilius | `src/styles/global.css` |
| `llms.txt` | generuojamas automatiškai iš duomenų (`src/lib/llms.ts`) |

## SEO / GEO / AEO
- Unikalus title/description, canonical, OG/Twitter, OG paveikslėlis (`public/og-image.jpg`)
- JSON-LD visuose puslapiuose: `VeterinaryCare` + `Pharmacy` + `WebSite`; paslaugoms `Service` + `FAQPage` + `BreadcrumbList`; blogui `BlogPosting`
- `sitemap-index.xml` (automatinis), `robots.txt` leidžia AI crawlerius, `llms.txt` / `llm.txt`
- Kiekvieno paslaugos ir blogo puslapio pradžioje – tiesioginis atsakymas (answer box)
- Lighthouse (mobile, lokaliai): Performance 99, Accessibility 96→100 (pataisytas kontrastas), Best Practices 100, SEO 100

## TODO – gauti iš kliento
- [ ] Gydytojų vardai, pareigos ir nuotraukos (dabar placeholderiai `index.astro` ir `apie-mus.astro`)
- [ ] Tikros klinikos / vaistinės / galerijos nuotraukos (dabar iliustracinės)
- [ ] Logotipas vektoriniu formatu (dabar laikinas SVG)
- [ ] Įmonės kodas, PVM kodas (poraštei ir schema)
- [ ] Paslaugų kainos (`kainos.astro` – dabar „Teiraukitės“)
- [ ] Vaistinės darbo laikas (jei skiriasi nuo klinikos)
- [ ] Parduotuvės asortimentas ir kainos (`parduotuve.astro` – demo vitrina)
- [ ] Patvirtinti, kurias procedūras atlieka (ypač homeopatija, ūkio gyvūnai, triušių vakcinacija)
- [ ] Atvykimas į namus – teritorija, ar mokamas
- [ ] Keliaujantiems – patikrinti šalių taisykles
- [ ] Nauji blogo įrašai (dabar perkelti iš Ortovet, išvalyti nuo Ortovet faktų)
- [ ] Kontaktų formos backend'as (dabar `mailto:`)

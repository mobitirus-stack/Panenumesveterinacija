import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

// Blogo įrašai su `preview: true` (dar neperrašyti) neįtraukiami į sitemap.
const previewPosts = fs.readdirSync('./src/content/blog')
  .filter((f) => /^preview:\s*true/m.test(fs.readFileSync(`./src/content/blog/${f}`, 'utf8')))
  .map((f) => `/blog/${f.replace(/\.md$/, '')}/`);

export default defineConfig({
  site: 'https://www.panemunesveterinarija.lt',
  outDir: './public_html',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (p) => !p.includes('/404') && !previewPosts.some((s) => p.endsWith(s)) })],
  image: { responsiveStyles: false },
});

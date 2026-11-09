import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    image: z.string(),
    // true – rodoma tik įžanga, pilnas tekstas dar rašomas (noindex, ne sitemap'e)
    preview: z.boolean().default(false),
  }),
});

export const collections = { blog };

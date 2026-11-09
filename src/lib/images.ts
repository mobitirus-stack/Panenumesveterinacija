import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.{webp,jpg,png}', { eager: true });
const byName: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  byName[path.split('/').pop()!.replace(/\.\w+$/, '')] = mod.default;
}
export const img = (name?: string) => (name ? byName[name] : undefined);

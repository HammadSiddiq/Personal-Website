import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// All images dropped into public/images/projects/<slug>/ become the project gallery,
// sorted by file name (01.jpg, 02.jpg, ...).
export function listGallery(slug: string): string[] {
  const dir = join(process.cwd(), 'public', 'images', 'projects', slug);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/images/projects/${slug}/${f}`);
}

// Accepts youtube.com/watch?v=ID, youtu.be/ID, youtube.com/shorts/ID, youtube.com/embed/ID
export function youtubeId(url: string): string | undefined {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/))([\w-]{11})/);
  return m?.[1];
}

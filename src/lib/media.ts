import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

export interface GalleryImage {
  src: string;
  w: number;
  h: number;
}

// All images dropped into public/images/projects/<slug>/ become the project gallery,
// sorted by file name (01.jpg, 02.jpg, ...). Width/height let the page lay out
// landscape and portrait screenshots differently.
export async function listGallery(slug: string): Promise<GalleryImage[]> {
  const dir = join(process.cwd(), 'public', 'images', 'projects', slug);
  if (!existsSync(dir)) return [];
  const files = readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return Promise.all(
    files.map(async (f) => {
      const meta = await sharp(join(dir, f)).metadata();
      return { src: `/images/projects/${slug}/${f}`, w: meta.width ?? 16, h: meta.height ?? 9 };
    }),
  );
}

// Accepts youtube.com/watch?v=ID, youtu.be/ID, youtube.com/shorts/ID, youtube.com/embed/ID
export function youtubeId(url: string): string | undefined {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/))([\w-]{11})/);
  return m?.[1];
}

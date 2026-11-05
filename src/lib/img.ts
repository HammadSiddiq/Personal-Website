import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Returns the public URL of the first matching image, or undefined if none exists yet.
// Drop files into public/images/... and they are picked up automatically at build time.
export function findImage(folder: string, name: string): string | undefined {
  for (const ext of ['jpg', 'jpeg', 'webp', 'png']) {
    const rel = `/images/${folder}/${name}.${ext}`;
    if (existsSync(join(process.cwd(), 'public', rel))) return rel;
  }
  return undefined;
}

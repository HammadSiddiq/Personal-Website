import { findImage } from '../lib/img';
import { listGallery } from '../lib/media';

export interface Project {
  slug: string; // folder/file name: public/images/projects/<slug>.jpg (thumbnail) and /<slug>/ (gallery)
  title: string;
  genre: string; // e.g. "3D Platformer", "VR Simulation"
  blurb: string; // short text for cards
  description?: string; // full text for the project page; separate paragraphs with a blank line
  play?: string; // itch.io URL. Powers the "Try it" and "Play →" links.
  videos?: string[]; // YouTube links, or /videos/<file>.mp4 for a file in public/videos
  featured?: boolean; // shown in the numbered portfolio on the home page (first 6)
  latest?: boolean; // shown in "My Latest Work" on the home hero
}

// Add new Unity projects here (newest first). Each one gets its own page at /projects/<slug>.
const list: Project[] = [
  {
    slug: 'vrsim',
    title: 'VRSim',
    genre: 'VR Simulation',
    blurb: 'A VR courtroom simulation built in Unity.',
    featured: true,
    latest: true,
  },
];

export const projects = list.map((p) => {
  const gallery = listGallery(p.slug);
  return { ...p, gallery, image: findImage('projects', p.slug) ?? gallery[0] };
});

import { findImage } from '../lib/img';

export interface Project {
  slug: string; // image file name: public/images/projects/<slug>.jpg (or .webp / .png)
  title: string;
  genre: string; // e.g. "3D Platformer", "VR Simulation"
  blurb: string;
  play?: string; // itch.io URL. The "Play →" link only shows when this is set.
  featured?: boolean; // shown in the numbered portfolio on the home page (first 6)
  latest?: boolean; // shown in "My Latest Work" on the home hero
}

// Add new Unity projects here (newest first).
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

export const projects = list.map((p) => ({ ...p, image: findImage('projects', p.slug) }));

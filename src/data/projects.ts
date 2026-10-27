export interface Project {
  title: string;
  tag: string; // e.g. "Unity · VR"
  blurb: string;
  play?: string; // itch.io URL. The "Play →" link only shows when this is set.
  featured?: boolean; // featured projects appear on the homepage (first 6)
}

// Add new Unity projects here. They show up on the Projects page,
// and any with `featured: true` also show on the homepage (max 6).
export const projects: Project[] = [
  {
    title: 'VRSim',
    tag: 'Unity · VR',
    blurb: 'A VR courtroom simulation built in Unity.',
    featured: true,
  },
];

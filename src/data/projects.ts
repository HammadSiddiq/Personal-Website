import { findImage } from '../lib/img';
import { listGallery } from '../lib/media';

export interface Project {
  slug: string; // folder/file name: public/images/projects/<slug>.jpg (thumbnail) and /<slug>/ (gallery)
  title: string;
  genre: string; // e.g. "3D Platformer", "VR Simulation"
  blurb: string; // short text for cards
  description?: string; // full text for the project page; separate paragraphs with a blank line
  play?: string; // itch.io URL. Powers the "Try it" and "Play →" links. Leave out if there is no link.
  videos?: string[]; // YouTube links, or /videos/<file>.mp4 for a file in public/videos
  featured?: boolean; // shown in the numbered portfolio on the home page (first 6)
  latest?: boolean; // shown in "My Latest Work" on the home hero
}

// Add new Unity projects here, in display order. Each one gets its own page at /projects/<slug>.
const list: Project[] = [
  {
    slug: 'vrsim',
    title: 'VRSim',
    genre: 'Virtual Reality',
    blurb: 'Courtroom in Virtual Reality',
    description:
      'Experience the realtime simulation of courtroom proceedings in VR. Talk to others, present evidence and see a case being resolved. If you are alone, you can also simulate a proceeding against an AI lawyer and a robot judge.',
    play: 'https://lord-hammad.itch.io/vrsim',
    featured: true,
    latest: true,
  },
  {
    slug: 'cross-fire',
    title: 'Cross Fire',
    genre: 'Virtual Reality',
    blurb: 'Complete the Goals and Destroy the Enemy Base',
    description:
      "Welcome to Cross Fire! You are trapped in an arena full of drama and chaos. The goal is to destroy the enemy center. Kill as many enemies as you can as you will find powerups along your way. But don't forget to collect the gold bars and diamonds as only they can lead you to the next phase of the game. You have to collect car parts and construct a car. You will have to use this car to fight tanks and destroy the enemy center!",
    play: 'https://lord-hammad.itch.io/cross-fire',
    featured: true,
  },
  {
    slug: 'car-crash',
    title: 'Car Crash',
    genre: '3D Endless Runner',
    blurb: 'Drive for as long as you can, dodge obstacles and go for powerups to ease your way through',
    description:
      'Welcome to Car Crash! Dive into the adventure of taking your car as far as you can. Dodge obstacles and collect cash and gold to buy powerups and upgrade your experience. Grab collectibles on your way to ease your way as you go. Play mini-games to either multiply your money or entirely lose it! See your progress in the stats and complete missions to win rewards.',
    play: 'https://lord-hammad.itch.io/car-crash',
    featured: true,
  },
  {
    slug: 'jimmy-the-runner',
    title: 'Jimmy the Runner',
    genre: '3D Endless Runner',
    blurb: 'Run for the win but look out for the obstacles and grab coins and powerups',
    description:
      'Get ready for The Ultimate Endless Runner—a high-speed challenge that pushes your reflexes to the limit! Dash through one of the toughest obstacle-filled paths as you collect coins and grab powerful upgrades to enhance your run. Powerups will help you go further, but it’s your score that truly matters. Stay sharp and focused, because a single hit from an obstacle can bring your progress to an abrupt end. With nonstop action and the thrill of endless gameplay, this runner is all about how far you can go. Have fun and chase that high score!',
    play: 'https://lord-hammad.itch.io/jimmy-the-runner',
    featured: true,
  },
  {
    slug: 'cosmic-havoc',
    title: 'Cosmic Havoc',
    genre: '2D Shooter',
    blurb: 'Face a swarm of different enemies, Get rid of them before they get rid of you.',
    description:
      'Welcome to the ultimate 2D Shooter Game, a fast-paced challenge spread across three thrilling levels! Use the arrow keys to move your character through action-packed environments while aiming and shooting at enemies with your mouse. Dodge incoming obstacles and stay ahead of relentless enemies that chase you down. If you need a break, just hit the Escape key to pause the game. With smooth controls and non-stop action, this shooter will test your reflexes and keep you hooked from start to finish. Get ready, aim, and survive—have fun!',
    play: 'https://lord-hammad.itch.io/cosmic-havoc',
    featured: true,
  },
  {
    slug: 'space-adventure',
    title: 'Space Adventure',
    genre: '3D Platformer',
    blurb: 'Fight through waves of enemies in deep space and find the key to the portal.',
    description:
      'You are trapped in the depths of space, and the only way out is to fight your way through! In this action-packed arena game, your mission is to defeat waves of enemies while navigating a hostile environment. Along the way, collect powerful upgrades that enhance your abilities and help you survive the chaos. Your ultimate goal is to find the hidden key that unlocks the portal to the next level. With each stage more challenging than the last, only the strongest and smartest will escape this galactic trap!',
    play: 'https://lord-hammad.itch.io/space-adventure',
    featured: true,
  },
  {
    slug: 'box-shooter',
    title: 'Box Shooter',
    genre: '3D Shooter',
    blurb: 'Shoot our or get out',
    description:
      'In this fast-paced game, you have 30 seconds to score as many points as possible by interacting with different colored boxes. White boxes are your allies, granting you an extra 3 seconds each time you collect one, giving you a chance to extend your playtime. Orange boxes are your main source of points, rewarding you with 5 points for every successful hit. However, beware of the yellow boxes—they’ll deduct 3 points from your total score if you collect them. Strategy and quick reflexes are key as you race against the clock, aiming to maximize your score while avoiding costly mistakes.',
    play: 'https://lord-hammad.itch.io/box-shooter',
  },
  {
    slug: 'interstellar-escape',
    title: 'Interstellar Escape',
    genre: '2D Platformer',
    blurb: 'Train your jumping skills to escape or be ready for an acid bath!',
    description:
      'Get ready for an epic space adventure where danger lurks at every turn! In this thrilling game, you’ll navigate a chaotic galaxy filled with deadly enemies and pools of toxic acid that can end your journey in an instant. Your survival depends on your ability to dodge, fight, and think fast. But it’s not all doom—along the way, you’ll find helpful powerups like extra lives, protective shields, and score boosts that make the journey even more exciting. Your ultimate goal: locate the hidden key and reach the door to escape to the next level. Brace yourself—it’s going to be a wild ride through space!',
    play: 'https://lord-hammad.itch.io/interstellar-escape',
  },
  {
    slug: 'the-history-game',
    title: 'The History Game',
    genre: 'Quiz Game',
    blurb: 'Check how well you know the American history',
    description:
      'Answer questions regarding American history from among 5 different categories. Maintain as long a streak as you can. Enjoy this simple but joyful treat made for history lovers.',
  },
];

export const projects = await Promise.all(
  list.map(async (p) => {
    const gallery = await listGallery(p.slug);
    return { ...p, gallery, image: findImage('projects', p.slug) ?? gallery[0]?.src };
  }),
);

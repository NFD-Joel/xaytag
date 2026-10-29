export interface Project {
  /** Card title. */
  title: string;
  /** One-line description shown under the title. */
  description: string;
  /** Destination URL the card links to. */
  url: string;
  /** Emoji or short label shown in the card's icon badge. */
  icon?: string;
  /** Path to a logo image, shown instead of the emoji icon. */
  logo?: string;
  /** Optional category badge, e.g. "webapp", "site", "tool". */
  tag?: string;
  /** Tech chips rendered at the bottom of the card. */
  tech?: string[];
  /** Year shown next to the status dot. */
  year?: string;
  /** Render larger and first in the public showcase. */
  featured?: boolean;
}

// Private tools and documents live behind the login on the dashboard,
// not here — everything in this repo is public.
export const DASHBOARD_URL = 'https://dash.xaytag.com';

// Single source of truth for the public showcase. Add/remove entries here —
// nothing else needs to change.
export const projects: Project[] = [
  {
    title: 'Agua es Vida',
    description:
      'Reverse-osmosis water filtration company in Paraguay — full marketing site, bilingual, built and deployed end to end.',
    url: 'https://aguaesvida.com.py',
    icon: '💧',
    tag: 'client site',
    tech: ['Web', 'SEO', 'Cloudflare'],
    year: '2023',
    featured: true,
  },
  {
    title: 'xaytag',
    description:
      'This site — a hand-built Astro portfolio with live status checks and a theme switch.',
    url: 'https://github.com/NFD-Joel/xaytag',
    icon: '🛰️',
    tag: 'open source',
    tech: ['Astro', 'TypeScript', 'GitHub Pages'],
    year: '2026',
  },
  {
    title: 'Bobinado',
    description:
      'Calculadora de rebobinado de motores: iguala la sección de cobre de un bobinado con los alambres disponibles.',
    url: 'https://bobinado.xaytag.com',
    icon: '🔌',
    tag: 'tool',
    tech: ['JavaScript', 'PWA'],
    year: '2026',
  },
  {
    title: 'mipoco',
    description:
      'A minimal, fast TUI terminal multiplexer for running multiple Claude Code sessions side by side, with a built-in file explorer. Linux + Windows.',
    url: 'https://github.com/NFD-Joel/mipoco',
    logo: '/mipoco.svg',
    tag: 'open source',
    tech: ['Rust', 'TUI', 'ConPTY'],
    year: '2026',
    featured: true,
  },
];

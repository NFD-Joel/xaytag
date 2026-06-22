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
  /** Belongs in the locked Personal section instead of the public grid. */
  personal?: boolean;
}

// Passphrase for the locked Personal section. This is a static site, so the
// gate is client-side only — it hides the cards from casual visitors, it is
// not real security. CHANGE THIS to your own word.
export const PERSONAL_PASSPHRASE = '0655164';

// Single source of truth for the dashboard. Add/remove entries here —
// nothing else needs to change. Set `personal: true` to move a card behind
// the passphrase gate.
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
      'This site — a hand-built Astro portfolio with a passphrase-gated private area, live status checks and a theme switch.',
    url: 'https://github.com/NFD-Joel/xaytag',
    icon: '🛰️',
    tag: 'open source',
    tech: ['Astro', 'TypeScript', 'GitHub Pages'],
    year: '2026',
  },
  {
    title: 'Homelab',
    description:
      'Self-hosted Proxmox stack: TrueNAS storage, pfSense + AdGuard, Docker via Portainer, Cloudflare tunnels and Tailscale.',
    url: 'https://github.com/NFD-Joel',
    icon: '🧰',
    tag: 'infrastructure',
    tech: ['Proxmox', 'Docker', 'TrueNAS', 'pfSense'],
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
  {
    title: '3D-Druck Preisrechner',
    description: 'Verkaufspreis für 3D-Drucke in Guaraní berechnen.',
    url: 'https://nfd-joel.github.io/nfdprinting/',
    icon: '🖨️',
    tag: 'tool',
    tech: ['JavaScript'],
    personal: true,
  },
  {
    title: 'Informes',
    description: 'Spanische Schul-Informes — lesen & abhaken.',
    url: 'https://informes.xaytag.com',
    icon: '📝',
    tag: 'school',
    personal: true,
  },
];

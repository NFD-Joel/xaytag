export interface Project {
  /** Card title. */
  title: string;
  /** One-line description shown under the title. */
  description: string;
  /** Destination URL the card links to. */
  url: string;
  /** Emoji or short label shown in the card's icon badge. */
  icon?: string;
  /** Optional category badge, e.g. "webapp", "site", "tool". */
  tag?: string;
}

// Single source of truth for the dashboard. Add/remove entries here —
// nothing else needs to change.
export const projects: Project[] = [
  {
    title: 'Example App',
    description: 'Replace these with your real projects.',
    url: 'https://example.com',
    icon: '🚀',
    tag: 'webapp',
  },
  {
    title: 'Another Site',
    description: 'Each entry becomes one card in the grid.',
    url: 'https://example.org',
    icon: '🌐',
    tag: 'site',
  },
];

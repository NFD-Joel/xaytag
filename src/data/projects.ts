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
    title: 'Agua es Vida',
    description: 'Filtración de agua por ósmosis inversa en Paraguay.',
    url: 'https://aguaesvida.com.py',
    icon: '💧',
    tag: 'site',
  },
  {
    title: '3D-Druck Preisrechner',
    description: 'Verkaufspreis für 3D-Drucke in Guaraní berechnen.',
    url: 'https://nfd-joel.github.io/nfdprinting/',
    icon: '🖨️',
    tag: 'tool',
  },
];

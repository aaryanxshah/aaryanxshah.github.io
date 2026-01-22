export const COLORS = {
  background: '#FAFAF9',
  foreground: '#1C1917',
  rose: '#E8B4B8',
  amber: '#E8D4B8',
  warmGray: {
    50: '#FAFAF9',
    100: '#F5F5F4',
    200: '#E7E5E4',
    400: '#A8A29E',
    500: '#78716C',
    800: '#292524',
    900: '#1C1917',
  },
} as const;

export type SectionId = 'hero' | 'about' | 'projects' | 'writing' | 'contact';

export interface WaveformConfig {
  frequency: number;
  amplitude: number;
  speed: number;
}

export const SECTION_WAVEFORM_CONFIG: Record<SectionId, WaveformConfig> = {
  hero: { frequency: 0.8, amplitude: 30, speed: 1.2 },
  about: { frequency: 1.2, amplitude: 20, speed: 1.0 },
  projects: { frequency: 2.0, amplitude: 50, speed: 1.5 },
  writing: { frequency: 1.0, amplitude: 25, speed: 1.0 },
  contact: { frequency: 0.6, amplitude: 15, speed: 0.8 },
};

export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

export const NAV_ITEMS = SECTIONS.filter((s) => s.id !== 'hero');

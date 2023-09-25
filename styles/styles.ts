export const breakpoints = {
  xs: 480,
  s: 600,
  m: 850,
  l: 1120,
  xl: 1680,
  xxl: 1920,
} as const;

export const zIndex = {
  page: 10,
  modal: 20,
  header: 30,
} as const;

export const baseStyling = {
  htmlFontSize: 18,
  baselinePX: 20,
  base: (multiplier = 1): string => `${(baseStyling.baselinePX / baseStyling.htmlFontSize) * multiplier}rem`,
};

export const colors = {
  purple: '#521C75',
  darkPurple: '#311245',
  yellow: '#F0A329',
  white: '#FFFFFF',
  gray: '#8F8F8F',
  none: 'rgba(0,0,0,0)',
} as const;

export type Color = 'purple' | 'darkPurple' | 'yellow' | 'white' | 'gray' | 'none';

export const gradients = {
  purple:
    'radial-gradient(circle, rgba(82,28,117,1) 0%, rgba(49,18,69,1) 100%)',
  darkPurple:
    'radial-gradient(circle, rgba(49,18,69,1) 0%, rgba(36,11,52,1) 100%)',
  yellow:
    'radial-gradient(circle, rgba(240,162,57,1) 0%, rgba(217,145,48,1) 100%)',
  white:
    'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%)',
  gray: '',
  none: '',
} as const;
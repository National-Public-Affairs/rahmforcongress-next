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
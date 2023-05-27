export const breakpoints = {
  xs: '480',
  s: '600',
  m: '850',
  l: '1120',
  xl: '1680',
  xxl: '1920',
};

export const zIndex = {
  page: 10,
  modal: 20,
  header: 30,
};

export const baseStyling = {
  htmlFontSize: 18,
  baselinePX: 20,
  base: (multiplier = 1): string => `${(baseStyling.baselinePX / baseStyling.htmlFontSize) * multiplier}rem`,
};
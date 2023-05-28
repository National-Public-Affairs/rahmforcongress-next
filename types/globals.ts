import type { NavItemType, SocialLinkType } from './fields';

export type HeaderType = {
  globalType: 'header';
  navItems: NavItemType[];
}

export type FooterType = {
  globalType: 'footer';
  navItems: NavItemType[];
  displaySocial: 'yes' | 'no';
  displayCopyright: 'yes' | 'no';
  displayDisclaimer: 'yes' | 'no';
}

export type SocialType = {
  globalType: 'social-media';
  links: SocialLinkType[];
}

export type LegalType = {
  globalType: 'legal';
  disclaimer?: string;
  address?: string;
  copyright?: string;
}
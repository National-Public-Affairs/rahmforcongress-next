import type { NavItemType, SocialLinkType } from './fields';

export type HeaderType = {
  globalType: 'header';
  navItems: NavItemType[];
}

export type SocialType = {
  globalType: 'social-media';
  links: SocialLinkType[];
}
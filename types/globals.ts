import type { NavItem, SocialLink } from './fields';

export type Header = {
  globalType: 'header';
  navItems: NavItem[];
}

export type Social = {
  globalType: 'social-media';
  links: SocialLink[];
}
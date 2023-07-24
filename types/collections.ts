import type { MetaType, HeroType, BannerType, MediaType, LinkType } from './fields';
import type { LayoutType } from './blocks';
import { Color } from '@/styles/styles';

export type PageType = {
  id: string;
  title: string;
  hero: HeroType;
  layout: LayoutType[];
  banner: BannerType;
  slug: string;
  meta: MetaType;
  _status: 'published' | 'draft';
}

export type PageQueryType = {
  docs: PageType[];
  totalPages: number;
}

export type NewsType = {
  id: string;
  media: MediaType;
  title: string;
  description: string;
  backgroundColor: Color;
  links: {
    id: string;
    link: LinkType;
  }[];
}

export type NewsQueryType = {
  docs: NewsType[];
  totalPages: number;
}
import type { MetaType, HeroType, BannerType, MediaType } from './fields';
import type { LayoutType } from './blocks';

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
}

export type NewsQueryType = {
  docs: NewsType[];
  totalPages: number;
}
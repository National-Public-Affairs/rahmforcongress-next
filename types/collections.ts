import type { MetaType, HeroType, BannerType } from './fields';
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

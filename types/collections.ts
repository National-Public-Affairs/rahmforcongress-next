import type { MetaType, HeroType, LayoutType } from './fields';

export type PageType = {
  id: string;
  title: string;
  hero: HeroType;
  layout: LayoutType[];
  slug: string;
  meta: MetaType;
  _status: 'published' | 'draft';
}

export type PageQueryType = {
  docs: PageType[];
  totalPages: number;
}

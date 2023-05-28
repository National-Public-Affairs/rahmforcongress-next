import type { MetaType, HeroType } from './fields';

export type PageType = {
  id: string;
  title: string;
  hero: HeroType;
  layout: any; // deal with
  slug: string;
  meta: MetaType;
  _status: 'published' | 'draft';
}

export type PageQueryType = {
  docs: PageType[];
  totalPages: number;
}

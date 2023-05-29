///////////////////////
// Nav & Hyperlinks
///////////////////////
export type LinkType = {
  type: 'reference' | 'custom';
  reference?: {
    value: {
      slug: string;
    };
  };
  label: string;
  newTab?: boolean;
  url?: string;
};

export type NavItemType = {
  id: string;
  link: LinkType;
};

///////////////////////
// Social Media
///////////////////////
export type SocialLinkType = {
  id: string;
  url: string;
  label: string;
};

///////////////////////
// Rich Text
///////////////////////
export type MediaType = {
  id?: string;
  alt?: string;
  mimeType: string;
  url: string;
};

///////////////////////
// Meta & SEO
///////////////////////
export type MetaType = {
  title?: string;
  description?: string;
  image?: MediaType;
};

///////////////////////
// Hero
///////////////////////
export type HeroType = {
  type: 'withMedia' | 'minimal';
  richText: any;
  foregroundMedia?: MediaType;
  backgroundMedia?: MediaType;
};

export type MinimalHeroType = {
  type: 'minimal';
  richText: any;
};

///////////////////////
// Rich Text
///////////////////////

export type RichTextType = {
  children: any;
  type: any;
};

import type { Color } from '@/styles/styles';
import type { LinkType, MediaType, RichTextType } from './fields';
import type { FormType } from '@/blocks/Form/types';

import { gradients } from '@/styles/styles';

export type BlockType =
  | 'content'
  | 'donation'
  | 'cta'
  | 'formBlock'
  | 'mediaBlock'
  | 'archive'
  | 'accentMediaBlock'
  | 'twitterFeed'
  | 'slider'
  | 'newsBlock'
  | 'twoColumn'
  | 'quote'
  | 'carousel';

  // satisfies quote block type
  type QuoteMedium = {
    id: string;
    quoteMedium: MediaType;
  };

export type LayoutType = {
  blockType: BlockType;
  id: string;
  blockName?: string;
  cta?: string;
  options?: DonationOptionType[];
  backgroundColor?: Color;
  backgroundMedia?: MediaType[];
  quoteMedia?: QuoteMedium[];
  ctaBackgroundColor?: Color;
  richText?: RichTextType[];
  displayBorder?: boolean;
  accentStyle?: 'one' | 'two';
  accentSize?: 'small' | 'medium' | 'large';
  accentMedia?: MediaType;
  type?: 'bold' | 'subtle';
  enableIntro?: boolean;
  introContent: RichTextType;
  form?: FormType;
  slides?: Slide[];
  items?: CarouselItem[];
  display?: boolean;
  twoColumn?: TwoColumnContentType[];
};



///////////////////////
// Donation Block
///////////////////////
export type DonationBlockType = {
  backgroundColor?: Color;
  cta?: string;
  options?: DonationOptionType[];
}



export type DonationOptionType = {
  id: string;
  amount: number;
  link: LinkType;
}



///////////////////////
// Content Block
///////////////////////
export type ContentBlockType = {
  backgroundColor: Color;
  richText: RichTextType[];
}



///////////////////////
// Accent Media Block
///////////////////////
export type AccentMediaBlockType = {
  displayBorder: boolean;
  backgroundColor: Color;
  accentStyle?: 'one' | 'two';
  accentSize?: 'small' | 'medium' | 'large';
  accentMedia?: MediaType;
}



///////////////////////
// Call-to-Action
///////////////////////
export type CtaBlockType = {
  styleType: 'bold' | 'subtle';
  ctaBackgroundColor: Color;
  richText?: RichTextType[];
}



///////////////////////
// Twitter Feed
///////////////////////
export type TwitterFeedBlockType = {
  id: string;
  backgroundColor: Color;
  richText?: RichTextType[];
}



///////////////////////
// Media Slider
///////////////////////
export type Slide = {
  media: MediaType;
}

export type MediaSliderBlockType = {
  backgroundColor: Color;
  slides: Slide[];
}



///////////////////////
// News
///////////////////////
export type NewsBlockType = {
  display: boolean;
}

///////////////////////
// Two-Column
///////////////////////
export type TwoColumnBlockType = {
  backgroundColor: Color;
  twoColumn: TwoColumnContentType[];
}

type TwoColumnContentType = {
  id: string;
  contentType: 'media' | 'richText' | 'cta';
  richText?: any;
  type?: 'bold' | 'subtle';
} & AccentMediaBlockType;



///////////////////////
// Quote
///////////////////////
export type QuoteBlockType = {
  id: string;
  backgroundColor: keyof typeof gradients;
  richText?: any;
  quoteMedia?: QuoteMedium[];
};



///////////////////////
// Quote
///////////////////////
type CarouselItem = {
  id: string;
  media: MediaType;
}

export type CarouselBlockType = {
  id: string;
  backgroundColor: Color;
  items: CarouselItem[];
};

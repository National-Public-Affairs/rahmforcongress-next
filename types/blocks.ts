import { Color } from '@/styles/styles';
import type { LinkType, MediaType, RichTextType } from './fields';
import type { FormBlockType, FormType } from '@/blocks/Form/types';

export type BlockType =
  | 'content'
  | 'donation'
  | 'cta'
  | 'formBlock'
  | 'mediaBlock'
  | 'archive'
  | 'accentMediaBlock'
  | 'twitterFeed'
  | 'slider';

export type LayoutType = {
  blockType: BlockType;
  id: string;
  blockName?: string;
  cta?: string;
  options?: DonationOptionType[];
  backgroundColor?: Color;
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
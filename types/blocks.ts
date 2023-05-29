import { Color } from '@/styles/styles';
import { LinkType, MediaType, RichTextType } from './fields';

export type BlockType =
  | 'content'
  | 'donation'
  | 'cta'
  | 'formBlock'
  | 'mediaBlock'
  | 'archive'
  | 'accentMediaBlock';

export type LayoutType = {
  blockType: BlockType;
  id: string;
  cta?: string;
  options?: DonationOptionType[];
  backgroundColor: Color;
  richText?: RichTextType[];
  accentStyle?: 'one' | 'two';
  accentSize?: 'small' | 'medium' | 'large';
  accentMedia?: MediaType;
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
  backgroundColor?: Color;
  richText?: RichTextType[];
}

///////////////////////
// Accent Media Block
///////////////////////
export type AccentMediaBlockType = {
  backgroundColor: Color;
  accentStyle?: 'one' | 'two';
  accentSize?: 'small' | 'medium' | 'large';
  accentMedia?: MediaType;
}
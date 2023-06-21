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
  | 'accentMediaBlock';

// export interface LayoutAttributes {
//   id: string;
//   blockType: BlockType;
// }

// OLD VERSION **************************
export type LayoutType = {
  blockType: BlockType;
  id: string;
  blockName?: string;
  cta?: string;
  options?: DonationOptionType[];
  backgroundColor?: Color;
  ctaBackgroundColor?: Color;
  richText?: RichTextType[];
  accentStyle?: 'one' | 'two';
  accentSize?: 'small' | 'medium' | 'large';
  accentMedia?: MediaType;
  type?: 'bold' | 'subtle';
  enableIntro?: boolean;
  introContent: RichTextType;
  form?: FormType;
};
// *************************************

// 1ST ATTEMPT; MOST LIKELY UNSUCCESSFUL
// export interface LayoutType 
// | LayoutAttributes & ContentBlockType
// | LayoutAttributes & DonationBlockType
// | LayoutAttributes & AccentMediaBlockType
// | LayoutAttributes & CtaBlockType
// | LayoutAttributes & FormBlockType;

// export interface LayoutType {
//   id: string;
//   blockType: BlockType;
// }

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
export interface ContentBlockType extends LayoutAttributes {
  backgroundColor: Color;
  richText: RichTextType[];
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

///////////////////////
// Call-to-Action
///////////////////////
export type CtaBlockType = {
  styleType: 'bold' | 'subtle';
  ctaBackgroundColor: Color;
  richText?: RichTextType[];
}
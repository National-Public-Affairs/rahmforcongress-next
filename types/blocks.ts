import { Color } from "@/styles/styles";
import { LinkType, RichTextType } from "./fields";

export type BlockType =
  | 'content'
  | 'donation'
  | 'cta'
  | 'formBlock'
  | 'mediaBlock'
  | 'archive';

export type LayoutType = {
  blockType: BlockType;
  id: string;
  cta?: string;
  options?: DonationOptionType[];
  backgroundColor: Color;
  richText?: RichTextType[];
}

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
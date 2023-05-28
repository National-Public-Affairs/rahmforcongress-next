import { Color } from "@/styles/styles";
import { LinkType } from "./fields";

export type BlockType =
  | 'content'
  | 'donation'
  | 'cta'
  | 'formBlock'
  | 'mediaBlock'
  | 'archive';

export type LayoutType = {
  blockType: BlockType;
} & (DonationBlockType);

///////////////////////
// Donation Block
///////////////////////
export type DonationBlockType = {
  backgroundColor: Color;
  cta: string;
  options: DonationOptionType[];
}

export type DonationOptionType = {
  id: string;
  amount: number;
  link: LinkType;
}
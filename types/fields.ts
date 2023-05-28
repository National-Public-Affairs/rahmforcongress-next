export type LinkType = {
  type: "reference" | "custom";
  reference?: {
    value: {
      slug: string;
    },
  };
  label: string;
  newTab?: boolean;
  url?: string;
}

export type NavItemType = {
  id: string;
  link: LinkType;
}

export type SocialLinkType = {
  id: string;
  url: string;
  label: string;
}
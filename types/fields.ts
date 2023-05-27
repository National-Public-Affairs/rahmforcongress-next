export type Link = {
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

export type NavItem = {
  id: string;
  link: Link;
}

export type SocialLink = {
  id: string;
  url: string;
  label: string;
}
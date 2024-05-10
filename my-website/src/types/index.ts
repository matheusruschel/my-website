export type Size = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type TextVariant =
  | "header"
  | "title"
  | "tag"
  | "body"
  | "body-small"
  | "link"
  | "button";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "quaternary";

type Link = {
  fields: {
    linkName: string;
    linkUrl: string;
  };
};

export type FooterType = {
  linkSections: LinkSectionType[];
  socialMediaIcons: SocialMediaIcons[];
  locations: string;
  email: string;
  phoneNumber: string;
};

export type LinkSectionType = {
  fields: {
    linkSectionTitle: string;
    links: Link[];
  };
};

export type SocialMediaIcons = {
  fields: {
    iconName: string;
    ctaUrl: string;
    iconUrl: string;
  };
};

export type HeaderType = {
  title: string;
  phoneNumber: string;
  tribalscaleLogoUrl: string;
  headerDropdownMenus: LinkSectionType[];
  headerMenus: Link[];
  connectButton: Link;
};

export type Size = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type TextVariant =
  | "header"
  | "title"
  | "body"
  | "link"
  | "button"
  | "trademark"
  | "bodyVariant";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "quaternary";

type Link = {
  fields: {
    iconPath: string;
    buttonTitle: string;
    url: string;
  };
};

export type HeaderType = {
  headerMenus: Link[];
};

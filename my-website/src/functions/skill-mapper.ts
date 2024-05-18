import { TypeSkillSkeleton } from "@/contentful/types";
import { Entry } from "contentful";

export type RowList = {
  items: {
    title: string;
    levels: string;
    icon: string;
  }[];
};

// Function to map skills to RowList
export const mapSkillsToRowList = (skills: (Entry<TypeSkillSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string> | undefined)[]): RowList => {
  return {
    items: skills
      .filter((skill): skill is Entry<TypeSkillSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string> => skill !== undefined)
      .map(skill => ({
        title: skill.fields.title ?? "",
        levels: skill.fields.level ?? "",
        icon: skill.fields.icon ?? ""
      })),
  };
};
import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSkillSkeleton } from "./TypeSkill";

export interface TypeHomepageFields {
    headerText?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    skills?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSkillSkeleton>>;
    descriptionTitle?: EntryFieldTypes.Symbol;
    headerTitle?: EntryFieldTypes.Symbol;
}

export type TypeHomepageSkeleton = EntrySkeletonType<TypeHomepageFields, "homepage">;
export type TypeHomepage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHomepageSkeleton, Modifiers, Locales>;

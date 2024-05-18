import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSkillSkeleton } from "./TypeSkill";
import type { TypeTitleAndDescriptionSkeleton } from "./TypeTitleAndDescription";

export interface TypeHomepageFields {
    headerTitle?: EntryFieldTypes.Symbol;
    heroTitle: EntryFieldTypes.Symbol;
    titleAndDescriptions: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTitleAndDescriptionSkeleton>>;
    skills?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSkillSkeleton>>;
    listTitle: EntryFieldTypes.Symbol;
}

export type TypeHomepageSkeleton = EntrySkeletonType<TypeHomepageFields, "homepage">;
export type TypeHomepage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHomepageSkeleton, Modifiers, Locales>;

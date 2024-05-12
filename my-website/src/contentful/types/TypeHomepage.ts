import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHomepageFields {
    headerText?: EntryFieldTypes.Symbol;
    skills?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeHomepageSkeleton = EntrySkeletonType<TypeHomepageFields, "homepage">;
export type TypeHomepage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHomepageSkeleton, Modifiers, Locales>;

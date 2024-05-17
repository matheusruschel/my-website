import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTitleAndDescriptionFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
}

export type TypeTitleAndDescriptionSkeleton = EntrySkeletonType<TypeTitleAndDescriptionFields, "titleAndDescription">;
export type TypeTitleAndDescription<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTitleAndDescriptionSkeleton, Modifiers, Locales>;

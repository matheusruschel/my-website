import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeExperienceFields {
    companyName: EntryFieldTypes.Symbol;
    positionTitle: EntryFieldTypes.Symbol;
    time: EntryFieldTypes.Symbol;
    imageUrl: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
}

export type TypeExperienceSkeleton = EntrySkeletonType<TypeExperienceFields, "experience">;
export type TypeExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeExperienceSkeleton, Modifiers, Locales>;

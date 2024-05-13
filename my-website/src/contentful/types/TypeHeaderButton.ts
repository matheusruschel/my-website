import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeaderButtonFields {
    buttonTitle: EntryFieldTypes.Symbol;
    iconPath: EntryFieldTypes.Symbol;
}

export type TypeHeaderButtonSkeleton = EntrySkeletonType<TypeHeaderButtonFields, "headerButton">;
export type TypeHeaderButton<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeaderButtonSkeleton, Modifiers, Locales>;

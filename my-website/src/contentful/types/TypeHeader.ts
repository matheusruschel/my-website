import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeaderButtonSkeleton } from "./TypeHeaderButton";

export interface TypeHeaderFields {
    headerButtons: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeaderButtonSkeleton>>;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, "header">;
export type TypeHeader<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeaderSkeleton, Modifiers, Locales>;

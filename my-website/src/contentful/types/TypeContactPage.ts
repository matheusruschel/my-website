import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeContactPageFields {
    firstNameTitle: EntryFieldTypes.Symbol;
    lastNameTitle: EntryFieldTypes.Symbol;
    companyTitle: EntryFieldTypes.Symbol;
    messageTitle: EntryFieldTypes.Symbol;
    buttonSendTitle: EntryFieldTypes.Symbol;
    headerTitle: EntryFieldTypes.Symbol;
    messageSentSuccessTitle: EntryFieldTypes.Symbol;
    messageSentSuccessText: EntryFieldTypes.Symbol;
}

export type TypeContactPageSkeleton = EntrySkeletonType<TypeContactPageFields, "contactPage">;
export type TypeContactPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContactPageSkeleton, Modifiers, Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeExperienceSkeleton } from "./TypeExperience";
import type { TypePortfolioPanelSkeleton } from "./TypePortfolioPanel";

export interface TypeExperiencePageFields {
    headerTitle: EntryFieldTypes.Symbol;
    portfolio: EntryFieldTypes.EntryLink<TypePortfolioPanelSkeleton>;
    experience: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeExperienceSkeleton>>;
}

export type TypeExperiencePageSkeleton = EntrySkeletonType<TypeExperiencePageFields, "experiencePage">;
export type TypeExperiencePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeExperiencePageSkeleton, Modifiers, Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePortfolioPanelFields {
    resumeTitle: EntryFieldTypes.Symbol;
    githubTitle: EntryFieldTypes.Symbol;
    resumeUrl: EntryFieldTypes.Symbol;
    githubUrl: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
}

export type TypePortfolioPanelSkeleton = EntrySkeletonType<TypePortfolioPanelFields, "portfolioPanel">;
export type TypePortfolioPanel<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePortfolioPanelSkeleton, Modifiers, Locales>;

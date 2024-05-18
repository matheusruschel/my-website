import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSkillFields {
    title?: EntryFieldTypes.Symbol;
    level: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.Symbol;
    levelText: EntryFieldTypes.Symbol;
}

export type TypeSkillSkeleton = EntrySkeletonType<TypeSkillFields, "skill">;
export type TypeSkill<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSkillSkeleton, Modifiers, Locales>;

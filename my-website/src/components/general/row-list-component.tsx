"use client";
import { TypeSkillSkeleton } from "@/contentful/types";
import { Entry } from "contentful";
import Text from "./text-component";

type Props = {
  items: (Entry<TypeSkillSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string> | undefined)[];
};

export default function RowListComponent(props: Props) {
  const { items } = props;

  return (
    <div className="py-[15px] flex items-center justify-center content-center">
      <Text className="!text-black">{`hello`}</Text>
      <div className="flex">
        {items?.map((skill, index) => (
          <Text className="!text-black" key={index}>
            {skill?.fields.title}
          </Text>
        ))}
      </div>
    </div>
  );
}

"use client";
import { TypeSkillSkeleton } from "@/contentful/types";
import { Entry } from "contentful";
import Text from "./text-component";
import { RowList } from "@/mapper/skill-mapper";

type Props = RowList;

export default function RowListComponent(props: Props) {
  const { items } = props;

  return (
    <div className="py-[15px] flex flex-col items-center justify-center content-center">
      <Text className="!text-black">{`hello`}</Text>
      <div className="flex flex-col">
        {items?.map((item, index) => (
          <Text className="!text-black" key={index}>
            {item.title}
          </Text>
        ))}
      </div>
    </div>
  );
}

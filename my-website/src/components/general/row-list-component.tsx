"use client";
import { TypeSkillSkeleton } from "@/contentful/types";
import { Entry } from "contentful";
import Text from "./text-component";
import { RowList } from "@/mapper/skill-mapper";
import GrayPanel from "./gray-panel";
import ProgressBarComponent from "./progress-bar-component";

type Props = RowList;

export default function RowListComponent(props: Props) {
  const { items } = props;

  return (
    <GrayPanel isTopBorderEnabled={false}>
      <div className="bg-list-gray">
        {items?.map((item, index) => (
          <div
            className="flex flew-row p-[15px] border-[1px] border-b-white"
            key={index}
          >
            <Text className="!text-black">{item.title}</Text>
            <div className="flex flex-row">
            <Text className="!text-black">{item.years}</Text>
            <ProgressBarComponent
              maxStorage={10}
              currentStorage={parseInt(item.years, 10)}
            />
            </div>
          </div>
        ))}
      </div>
    </GrayPanel>
  );
}

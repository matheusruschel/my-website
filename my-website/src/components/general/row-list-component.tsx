"use client";
import Text from "./text-component";
import { RowList } from "@/functions/skill-mapper";
import GrayPanel from "./gray-panel";
import ProgressBarComponent from "./progress-bar-component";
import IconComponent from "./icon-component";

type Props = RowList;

export default function RowListComponent(props: Props) {
  const { items } = props;

  return (
    <GrayPanel className="lg:!w-[50%] md:!w-[50%] !w-[100%]">
      <div className="flex flex-col bg-list-gray">
        {items?.map((item, index) => (
          <div
            className="flex flew-row border-[2px] border-b-white h-[30px] justify-between"
            key={index}
          >
            <div className="flex flex-row">
              <IconComponent iconName={item.icon} />
              <Text className="!text-black">{item.title}</Text>
            </div>
          </div>
        ))}
      </div>
    </GrayPanel>
  );
}

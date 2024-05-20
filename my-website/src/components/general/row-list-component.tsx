"use client";
import Text from "./text-component";
import { RowList } from "@/functions/skill-mapper";
import GrayPanel from "./gray-panel";
import IconComponent from "./icon-component";

type Props = RowList;

export default function RowListComponent(props: Props) {
  const { items } = props;

  return (
    <GrayPanel className="md:!w-[50%] lg:!w-[50%]  !w-[100%]">
      <div className="flex flex-col bg-list-gray">
        {items?.map((item, index) => (
          <div
            className="flex flew-row border-[2px] border-b-white h-[30px] justify-between"
            key={index}
          >
            <div className="flex flex-row">
              <IconComponent iconName={item.icon} />
              <Text variant={"body"} className="!place-self-center">
                {item.title}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </GrayPanel>
  );
}

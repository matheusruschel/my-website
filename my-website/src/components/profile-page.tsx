import { ClassNameValue } from "tailwind-merge";
import Text from "./general/text-component";
import Image from "next/image";
import { TypeHomepageSkeleton } from "@/contentful/types";
import { Entry } from "contentful";
import RowListComponent from "./general/row-list-component";
import { mapSkillsToRowList } from "@/mapper/skill-mapper";
import GrayPanel from "./general/gray-panel";

type Props = Entry<
  TypeHomepageSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>["fields"];

export default function ProfilePage(props: Props) {
  const { headerTitle, description, descriptionTitle, skills } = props;
  return (
    <GrayPanel>
      <div className="p-[7px]">
        <div className="items-center justify-center content-center h-48 bg-white border-opacity-70 border-[2.2px] border-black shadow-sharp-blur">
          <div className="flex items-center justify-center">
            <Image
              width={150}
              height={150}
              src={"/IMG_7689.JPG"}
              alt="Icon"
              priority={true}
            />
            <Text className="pl-[20px] font-apple text-black !text-[120px]">
              {headerTitle}
            </Text>
          </div>
        </div>
        <div className="flex py-[10px]">
          <Text className="min-w-[100px] font-dePixelHalbfett text-black !text-[12px]">
            {descriptionTitle}
          </Text>
          <Text className="font-dePixelSchmal leading-6 text-black !text-[15px]">
            {description}
          </Text>
        </div>
      </div>
    </GrayPanel>
  );
}

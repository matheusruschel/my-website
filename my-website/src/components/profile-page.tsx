import { ClassNameValue } from "tailwind-merge";
import Text from "./general/text-component";
import Image from "next/image";
import { TypeHomepageSkeleton } from "@/contentful/types";
import { Entry } from "contentful";
import GrayPanel from "./general/gray-panel";

type Props = Entry<
  TypeHomepageSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>["fields"];

export default function ProfilePage(props: Props) {
  const { heroTitle, titleAndDescriptions } = props;
  return (
    <GrayPanel isBottomBorderEnabled={false}>
      <div className="p-[7px]">
        <div className="items-center justify-center content-center p-4 bg-white border-opacity-70 border-[2.2px] border-black shadow-sharp-blur">
          <div className="flex lg:flex-row md:flex-row sm:flex-col items-center justify-center">
            <Image
              width={150}
              height={150}
              src={"/IMG_7689.JPG"}
              alt="Icon"
              priority={true}
            />
            <Text className="md:inline lg:inline pl-[20px] font-apple text-black lg:!text-[120px] md:!text-[80px] sm:!text-[55px]">
              {heroTitle}
            </Text>
          </div>
        </div>
        <div className="flex flex-col space-y-4 py-[10px]">
          {titleAndDescriptions?.map((item, index) => (
            <div className={"flex flex-col space-y-1"} key={item?.fields.title}>
              <Text className="min-w-[100px] font-dePixelHalbfett text-black !text-[12px]">
                {item?.fields.title}
              </Text>
              <Text className="font-dePixelSchmal leading-6 text-black !text-[15px]">
                {item?.fields.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </GrayPanel>
  );
}

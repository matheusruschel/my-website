import Text from "./text-component";
import { TypeTitleAndDescriptionSkeleton } from "@/contentful/types";
import { Entry } from "contentful";

type Props = {
  titleAndDescriptions: (Entry<TypeTitleAndDescriptionSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string> | undefined)[];
}

export default function GeneralInformation(props: Props) {
  const { titleAndDescriptions } = props

  return (
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
  );
}

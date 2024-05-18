import Text from "./text-component";
import { TypeTitleAndDescriptionSkeleton } from "@/contentful/types";
import { Entry } from "contentful";

type Props = {
  titleAndDescriptions: (
    | Entry<
        TypeTitleAndDescriptionSkeleton,
        "WITHOUT_UNRESOLVABLE_LINKS",
        string
      >
    | undefined
  )[];
};

export default function GeneralInformation(props: Props) {
  const { titleAndDescriptions } = props;

  return (
    <div className="flex flex-col space-y-4 py-[10px]">
      {titleAndDescriptions?.map((item, index) => (
        <div className={"flex flex-col space-y-1"} key={item?.fields.title}>
          <Text variant={"title"} className="min-w-[100px]">
            {item?.fields.title}
          </Text>
          <Text variant={"body"} className="leading-6">
            {item?.fields.description}
          </Text>
        </div>
      ))}
    </div>
  );
}

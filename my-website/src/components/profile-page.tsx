import { TypeHomepageSkeleton } from "@/contentful/types";
import { Entry } from "contentful";
import GrayPanel from "./general/gray-panel";
import HeroBanner from "./general/hero-banner";
import GeneralInformation from "./general/general-information";

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
        <HeroBanner title={heroTitle} />
        <GeneralInformation titleAndDescriptions={titleAndDescriptions}/>
      </div>
    </GrayPanel>
  );
}

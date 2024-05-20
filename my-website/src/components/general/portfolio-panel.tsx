import Text from "./text-component";
import { TypePortfolioPanelSkeleton } from "@/contentful/types";
import { Entry } from "contentful";
import GrayPanel from "./gray-panel";
import LinkComponent from "./link-component";

type Props = Entry<
  TypePortfolioPanelSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>["fields"];

export default function PortfolioPanel(props: Props) {
  const {
    resumeTitle,
    githubTitle,
    resumeUrl,
    githubUrl,
    title,
    linkedinTitle,
    linkedinUrl,
  } = props;

  return (
    <GrayPanel>
      <div className="flex flex-row items-center justify-center py-[5px]">
        <Text className="!text-[13px]" variant="title">
          {title}
        </Text>
      </div>
      <div className="flex md:flex-row sm:flex-col items-center justify-center md:space-x-[100px] sm:space-y-[10px] py-[5px]">
        <LinkComponent title={resumeTitle} url={resumeUrl}/>
        <LinkComponent title={githubTitle} url={githubUrl}/>
        <LinkComponent title={linkedinTitle} url={linkedinUrl}/>
      </div>
    </GrayPanel>
  );
}

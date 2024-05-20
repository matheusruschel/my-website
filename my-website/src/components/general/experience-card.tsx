import Text from "./text-component";
import { TypeExperienceSkeleton } from "@/contentful/types";
import { Entry } from "contentful";
import GrayPanel from "./gray-panel";
import Image from "next/image";

type Props = {
  singleExperience:
    | Entry<TypeExperienceSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
    | undefined;
};

export default function ExperienceCard(props: Props) {
  const { singleExperience } = props;

  if (singleExperience == null) return null;

  const {
    companyName,
    positionTitle,
    time,
    imageUrl,
    description,
  } = singleExperience.fields;

  return (
    <GrayPanel className="flex flex-col py-[10px]">
      <div className="flex items-start p-[5px]">
        {/* Company Logo */}
        {imageUrl && (
          <div className="w-16 h-16 mr-4">
            <Image src={imageUrl} alt={companyName} width={64} height={64} />
          </div>
        )}
        <div className="flex-grow">
          {/* Company Title */}
          <Text variant="title" className="font-semibold">
            {positionTitle}
          </Text>
          {/* Job Position */}
          <Text variant="bodyVariant" className="pt-[2px]">{companyName}</Text>
        </div>
        {/* Time Period */}
        <Text variant="bodyVariant" className="text-right">
          {time}
        </Text>
      </div>
      {/* Job Description */}
      <Text className="whitespace-pre-line p-[15px]">{description}</Text>
    </GrayPanel>
  );
}

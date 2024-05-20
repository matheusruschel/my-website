import { TypeSkillSkeleton } from "@/contentful/types";
import RowListComponent from "./row-list-component";
import { Entry } from "contentful";
import { mapSkillsToRowList } from "@/functions/skill-mapper";
import { splitArrayIn } from "@/functions/split-array";

type ThreeRowListComponentsProps = {
  skills: (
    | Entry<TypeSkillSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
    | undefined
  )[];
};

const ThreeRowListComponents: React.FC<ThreeRowListComponentsProps> = ({
  skills,
}) => {
  const arrays = splitArrayIn(mapSkillsToRowList(skills).items, 3);

  return (
    <div>
      <div className="flex flex-col md:hidden lg:hidden">
        <RowListComponent items={mapSkillsToRowList(skills).items} />
      </div>
      <div className="hidden md:flex lg:flex flex-row space-x-2.5 w-full ">
        {arrays?.map((array: any, index) => (
          <RowListComponent key={index} items={array} />
        ))}
      </div>
    </div>
  );
};

export default ThreeRowListComponents;

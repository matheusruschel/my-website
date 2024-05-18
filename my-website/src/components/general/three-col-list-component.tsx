import { TypeSkillSkeleton } from "@/contentful/types";
import RowListComponent from "./row-list-component";
import { Entry } from "contentful";
import { RowList, mapSkillsToRowList } from "@/functions/skill-mapper";
import { splitArrayIn } from "@/functions/split-array";

type ThreeRowListComponentsProps = {
  skills: (
    | Entry<TypeSkillSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
    | undefined
  )[];
};

const TwoRowListComponents: React.FC<ThreeRowListComponentsProps> = ({
  skills,
}) => {
  const arrays = splitArrayIn(mapSkillsToRowList(skills).items, 3);

  return (
    <div>
      <div className="sm:flex flex-col md:hidden lg:hidden">
        <RowListComponent items={mapSkillsToRowList(skills).items} />
      </div>
      <div className="md:flex lg:flex sm:hidden flex-row space-x-2.5 w-full ">
        {arrays?.map((array: any, index) => (
          <RowListComponent key={index} items={array} />
        ))}
      </div>
    </div>
  );
};

export default TwoRowListComponents;

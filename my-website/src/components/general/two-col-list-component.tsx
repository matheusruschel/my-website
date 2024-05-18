import { TypeSkillSkeleton } from "@/contentful/types";
import RowListComponent from "./row-list-component";
import { Entry } from "contentful";
import { RowList, mapSkillsToRowList } from "@/functions/skill-mapper";
import { splitArrayInHalf } from "@/functions/split-array";

type TwoRowListComponentsProps = {
  skills: (
    | Entry<TypeSkillSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
    | undefined
  )[];
};

const TwoRowListComponents: React.FC<TwoRowListComponentsProps> = ({
  skills,
}) => {
  const arrays = splitArrayInHalf(mapSkillsToRowList(skills).items);

  return (
    <div>
      <div className="sm:flex flex-col md:hidden lg:hidden">
        <RowListComponent items={mapSkillsToRowList(skills).items} />
      </div>
      <div className="md:flex lg:flex sm:hidden flex-row space-x-2.5 w-full ">
        <RowListComponent items={arrays[0]} />
        <RowListComponent items={arrays[1]} />
      </div>
    </div>
  );
};

export default TwoRowListComponents;

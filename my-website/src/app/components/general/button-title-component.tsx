import { ClassNameValue } from "tailwind-merge";
import IconComponent from "./icon-component";
import Text from "./text-component";

type Props = {
  width?: number;
  height?: number;
  classNameTitle?: ClassNameValue;
  classNameButton?: ClassNameValue;
  iconName: string;
  title: string;
};

export default function ButtonTitleComponent({
  iconName,
  width = 25,
  height = 25,
  title,
  classNameTitle,
  classNameButton,
}: Props) {
  if (iconName === "") return null;

  return (
    <div className="">
      <IconComponent
        width={width}
        height={height}
        iconName={iconName}
        className={`${classNameButton}`}
      />
      <Text className={`!text-[12px] md:!text-[14px] !font-bold !text-grey-700 !leading-[183%] md:!leading-[219%] lg:!w-[640px] ${classNameTitle}`}>
        {title}
      </Text>
    </div>
  );
}

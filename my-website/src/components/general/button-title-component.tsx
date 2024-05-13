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
  width = 60,
  height = 60,
  title,
  classNameTitle,
  classNameButton,
}: Props) {
  if (iconName === "") return null;

  return (
    <div className="flex flex-col sm:px-1 md:px-20 !items-center !justify-center !content-center">
      <div className="p-[5px] !items-center !justify-center !content-center bg-blue-400">
        <button onClick={(event) => event.preventDefault()}>
          <IconComponent
            width={width}
            height={height}
            iconName={iconName}
            className={`${classNameButton}`}
          />
          <div className="px-[5px] bg-panel-gray w-full">
            <Text
              className={`!text-center !text-[15px] font-apple !text-black ${classNameTitle}`}
            >
              {title}
            </Text>
          </div>
        </button>
      </div>
    </div>
  );
}

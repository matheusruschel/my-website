import { ClassNameValue } from "tailwind-merge";
import IconComponent from "./icon-component";
import Text from "./text-component";
import { useState } from "react";
import Link from "next/link";

type Props = {
  width?: number;
  height?: number;
  classNameTitle?: ClassNameValue;
  classNameButton?: ClassNameValue;
  iconName: string;
  title: string;
  url: string;
  isSelected: boolean;
  index: number;
  onClick: (index: number) => void;
};

function onClick(event: Event) {
  event.preventDefault();
}

export default function ButtonTitleComponent({
  iconName,
  width = 50,
  height = 50,
  title,
  url,
  classNameTitle,
  classNameButton,
  isSelected,
  index,
  onClick,
}: Props) {
  const [isButtonActive, setIsButtonActive] = useState(false);

  if (iconName === "") return null;

  return (
    <div className="flex flex-col min-w-[100px] px-5 md:px-[35px] lg:px-[50px] !items-center !justify-center !content-center">
      <Link
        className="flex flex-col !items-center !justify-center !content-center"
        href={url}
        onClick={() => onClick(index)}
      >
        <IconComponent
          width={width}
          height={height}
          iconName={iconName}
          className={`${isSelected && "brightness-50"} ${classNameButton}`}
        />
        <div
          className={`px-[1px] w-fit h-auto  ${
            isSelected ? "bg-blue-950" : "bg-opacity-80 bg-gray-300"
          }`}
        >
          <Text
            className={`font-dePixelSchmal !text-center !text-[11px] font-apple  ${
              isSelected ? "!text-white" : "!text-black"
            } ${classNameTitle}`}
          >
            {title}
          </Text>
        </div>
      </Link>
    </div>
  );
}

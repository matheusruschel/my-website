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
};

function onClick(event: Event) {
  event.preventDefault();
}

export default function ButtonTitleComponent({
  iconName,
  width = 50,
  height = 50,
  title,
  classNameTitle,
  classNameButton,
}: Props) {
  const [isButtonActive, setIsButtonActive] = useState(false);

  if (iconName === "") return null;

  return (
    <div className="flex flex-col sm:px-1 md:px-20 !items-center !justify-center !content-center">
      <Link
        href={"/"}
        onClick={() => {
          console.log("button pressed");
          setIsButtonActive(!isButtonActive);
        }}
      >
        <IconComponent
          width={width}
          height={height}
          iconName={iconName}
          className={` ${isButtonActive === true &&
            "brightness-50"} ${classNameButton}`}
        />
        <div
          className={`px-[4px] w-fit ${
            isButtonActive === true ? "bg-blue-950" : "bg-panel-gray"
          }`}
        >
          <Text
            className={`!text-center !text-[15px] font-apple  ${
              isButtonActive === true
                ? "bg-blue-950 !text-white"
                : "bg-panel-gray !text-black"
            } ${classNameTitle}`}
          >
            {title}
          </Text>
        </div>
      </Link>
    </div>
  );
}

import Image from "next/image";
import { ClassNameValue } from "tailwind-merge";

type Props = {
  width?: number;
  height?: number;
  className?: ClassNameValue;
  iconName: string;
};

export default function IconComponent({
  iconName,
  width = 25,
  height = 25,
  className,
}: Props) {
  if (iconName === "") return null;

  return (
    <Image
      width={width}
      height={height}
      src={iconName}
      alt="Icon"
      className={`${className}`}
    />
  );
}

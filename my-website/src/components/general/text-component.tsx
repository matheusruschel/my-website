import { ReactNode } from "react";
import { TextVariant } from "@/types";

type Props = {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
  tsUnderline?: boolean;
};

const FONT_SIZES: Record<TextVariant, string> = {
  trademark:
    "font-dePixelBreitFett text-gray-500 ml-auto lg:!text-[12px] md:!text-[10px] sm:!text-[10px]",
  header:
    "font-apple text-black lg:!text-[120px] md:!text-[80px] sm:!text-[55px]",
  title:
    "font-dePixelHalbfett text-black lg:text-[13px] md:text-[13px]  sm:text-[13px] ",
  body:
    "font-dePixelSchmal text-black lg:text-[15px] md:text-[14px] sm:text-[15px]",
  bodyVariant:
    "font-dePixelSchmal lg:text-[15px] md:text-[14px] sm:text-[15px] text-gray-500 ml-auto",
  link:
    "font-medium text-black tracking-[-0.5px] hover:underline leading-[219%] lg:text-[15px] lg:leading-[219%] md:text-[15px] md:leading-[219%] sm:text-[14px] sm:leading-[219%]",
  button:
    "font-bold text-black uppercase tracking-[5px] leading-[120%] lg:text-[13px] lg:leading-[120%] md:text-[13px] md:leading-[120%] sm:text-[12px] sm:leading-[120%]",
};

export default function Text({
  children,
  variant = "body",
  className,
  tsUnderline,
}: Props) {
  const fontFamily = "";
  return (
    <p
      className={`${fontFamily} ${FONT_SIZES[variant]} ${className}`}
      style={tsUnderline ? { textDecorationSkipInk: "none" } : undefined}
    >
      {children}
    </p>
  );
}

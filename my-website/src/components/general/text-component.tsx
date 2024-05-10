import { ReactNode } from "react";
import { TextVariant } from "@/types";

type Props = {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
  tsUnderline?: boolean;
};

const FONT_SIZES: Record<TextVariant, string> = {
  header: "text-sm font-normal",
  title:
    "font-semibold text-[25px] leading-[91%] lg:text-[40px] lg:leading-[104%] md:text-[36px] md:leading-[104%] sm:text-[25px] sm:leading-[91%]",
  tag:
    "font-bold uppercase tracking-[5px] text-[12px] leading-[183%] lg:text-[14px] lg:leading-[120%] md:text-[14px] md:leading-[120%] sm:text-[12px] sm:leading-[183%]",
  body:
    "text-[15px]  leading-[150%] lg:text-[17px] lg:leading-[145%] md:text-[14px] md:leading-[120%] sm:text-[15px] sm:leading-[150%]",
  "body-small":
    "font-medium tracking-[-0.5px] text-[14px] leading-[24px] lg:text-[15px] lg:leading-[28px] md:text-[15px] md:leading-[26.6px] sm:text-[14px] sm:leading-[24px]",
  link:
    "font-medium tracking-[-0.5px] hover:underline text-[14px] leading-[219%] lg:text-[15px] lg:leading-[219%] md:text-[15px] md:leading-[219%] sm:text-[14px] sm:leading-[219%]",
  button:
    "font-bold uppercase tracking-[5px] text-[12px] leading-[120%] lg:text-[13px] lg:leading-[120%] md:text-[13px] md:leading-[120%] sm:text-[12px] sm:leading-[120%]",
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

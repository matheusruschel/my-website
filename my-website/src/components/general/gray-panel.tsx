import { ClassNameValue } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: ClassNameValue;
  hasBottomBorder: boolean;
};

export default function GrayPanel({
  children,
  className,
  hasBottomBorder = true,
}: Props) {
  return (
    <section className={`${className}`}>
      <div className="flex flex-col items-center border-[2.2px] border-opacity-70 border-black">
        <div className="bg-panel-gray border-l-white border-t-white border-r-white border-[2.2px]">
          {children}
        </div>
      </div>
      {hasBottomBorder && <div className="h-[2.2px] bg-white"></div>}
    </section>
  );
}

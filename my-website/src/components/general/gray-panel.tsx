import { ClassNameValue } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: ClassNameValue;
  isBottomBorderEnabled?: boolean;
};

export default function GrayPanel({
  children,
  className,
  isBottomBorderEnabled = true,
}: Props) {
  return (
    <section className={`${className}`}>
      <div
        className={`border-[2.2px] border-l-black border-r-black border-b-black border-t-black`}
      >
        <div
          className={`bg-panel-gray border-l-white border-t-white border-r-white border-[2.2px]`}
        >
          {children}
        </div>
      </div>
      {isBottomBorderEnabled && <div className="h-[2.2px] bg-white"></div>}
    </section>
  );
}

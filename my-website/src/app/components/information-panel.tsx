import { ClassNameValue } from "tailwind-merge";
import SectionContainer from "./section-container";

type Props = {
  className?: ClassNameValue;
};

export default function InformationPanel(props: Props) {
  const { className } = props;
  return (
    <main
      className={`h-[700px] w-8/12 bg-panel-gray border-2 border-slate-950 shadow-sharp ${className}`}
    >
      <div className=""></div>
    </main>
  );
}

import { ClassNameValue } from "tailwind-merge";
import Text from "./general/text-component";
import ProfilePage from "./profile-page";

type Props = {
  className?: ClassNameValue;
  headerText: String;
} & {
  children: React.ReactNode;
};

export default function InformationPanel(props: Props) {
  const { className } = props;
  return (
    <main
      className={`px-[5px] pb-[5px] flex flex-col items-center h-3/4 w-8/12 bg-panel-gray border-[1.5px] border-black shadow-sharp ${className}`}
    >
      <Text className="font-dePixelBreit text-black py-[5px] !text-[12px]">
        {props.headerText}
      </Text>
      <div className="grow w-full border-opacity-70 border-[2px] border-black shadow-sharp-blur">
        {props.children}
      </div>
    </main>
  );
}

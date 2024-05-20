import { ClassNameValue } from "tailwind-merge";
import Text from "./text-component";
import ProfilePage from "../profile-page";
import GrayPanel from "./gray-panel";

type Props = {
  className?: ClassNameValue;
  headerTitle: String;
} & {
  children: React.ReactNode;
};

export default function InformationPanel(props: Props) {
  const { className } = props;
  return (
    <GrayPanel
      className={`flex flex-col items-center h-3/4 w-[80%] sm:w-8/12 shadow-sharp ${className}`}
      isBottomBorderEnabled={false}
    >
      <div className="px-[5px] pb-[5px] flex flex-col items-center">
        <div className="relative flex items-center justify-center w-full">
          <Text variant={"title"} className="py-[5px] flex-grow text-center">
            {props.headerTitle}
          </Text>
          <Text
            variant={"trademark"}
            className="absolute right-0 hidden md:flex "
          >
            {"© matruschel"}
          </Text>
        </div>
        <div className="grow w-full">{props.children}</div>
      </div>
    </GrayPanel>
  );
}

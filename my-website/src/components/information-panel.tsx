import { ClassNameValue } from "tailwind-merge";
import Text from "./general/text-component";
import ProfilePage from "./profile-page";
import GrayPanel from "./general/gray-panel";

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
      className="flex flex-col items-center h-3/4 w-8/12 shadow-sharp"
      isBottomBorderEnabled={false}
    >
      <div className="px-[5px] pb-[5px] flex flex-col items-center">
        <div className="flex flex-row">
          <Text variant={"title"} className="py-[5px]">
            {props.headerTitle}
          </Text>
        </div>
        <div className="grow w-full">{props.children}</div>
      </div>
    </GrayPanel>
  );
}

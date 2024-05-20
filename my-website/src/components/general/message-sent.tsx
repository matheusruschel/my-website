import { ClassNameValue } from "tailwind-merge";
import InformationPanel from "./information-panel";
import GrayPanel from "./gray-panel";
import Text from "./text-component";

type Props = {
  headerTitle: string;
  messageSentText: string;
  messageSentTitle: string;
};

export default function MessageSentComponent(props: Props) {
  const { headerTitle, messageSentText, messageSentTitle } = props;

  return (
    <main className="flex flex-col items-center justify-center">
      <InformationPanel headerTitle={headerTitle}>
        <GrayPanel className="flex flex-col items-center justify-center text-center">
          <Text variant="title" className="text-2xl font-semibold sm:text-[17px] lg:text-[20px]">
            {messageSentTitle}
          </Text>
          <Text variant="body" className="mt-4">
            {messageSentText}
          </Text>
        </GrayPanel>
      </InformationPanel>
    </main>
  );
}

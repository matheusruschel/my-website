import InformationPanel from "../components/information-panel";
import { getHome } from "@/contentful/home";
import Text from "@/components/general/text-component";
import ProfilePage from "@/components/profile-page";
import RowListComponent from "@/components/general/row-list-component";
import { mapSkillsToRowList } from "@/functions/skill-mapper";
import TwoRowListComponents from "@/components/general/two-col-list-component";

export default async function Home() {
  const homepageProps = await getHome();

  if (!homepageProps) return null;

  const { skills } = homepageProps;

  return (
    <main className="flex flex-col items-center justify-center content-center">
      <InformationPanel headerTitle={homepageProps.headerTitle ?? ""}>
        <ProfilePage {...homepageProps} />
        <Text className="py-[10px] min-w-[100px] font-dePixelHalbfett text-black !text-[12px]">
          {homepageProps.listTitle}
        </Text>

        <TwoRowListComponents skills={skills} />
      </InformationPanel>
    </main>
  );
}

import InformationPanel from "../components/general/information-panel";
import { getHome } from "@/contentful/home";
import Text from "@/components/general/text-component";
import ProfilePage from "@/components/profile-page";
import ThreeRowListComponents from "@/components/general/three-col-list-component";

export default async function Home() {
  const homepageProps = await getHome();

  if (!homepageProps) return null;

  const { skills } = homepageProps;

  return (
    <main className="flex flex-col items-center justify-center content-center">
      <InformationPanel headerTitle={homepageProps.headerTitle ?? ""}>
        <ProfilePage {...homepageProps} />
        <Text variant={"title"} className="py-[10px] min-w-[100px]">
          {homepageProps.listTitle}
        </Text>
        <ThreeRowListComponents skills={skills} />
      </InformationPanel>
    </main>
  );
}

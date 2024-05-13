import IconComponent from "@/components/general/icon-component";
import InformationPanel from "../components/information-panel";
import ButtonTitleComponent from "@/components/general/button-title-component";
import { getHome } from "@/contentful/home";
import Text from "@/components/general/text-component";
import ProfilePage from "@/components/profile-page";

export default async function Home() {
  const { fields } = await getHome();

  if (!fields) return null;

  return (
    <main className="flex flex-col items-center justify-center content-center">
      <InformationPanel headerText={fields.headerText ?? ""}>
          <ProfilePage></ProfilePage>
      </InformationPanel>
    </main>
  );
}

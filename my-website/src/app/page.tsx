import IconComponent from "@/components/general/icon-component";
import InformationPanel from "../components/information-panel";
import ButtonTitleComponent from "@/components/general/button-title-component";
import { getHome } from "@/contentful/home";
import Text from "@/components/general/text-component";

export default async function Home() {
  const { fields } = await getHome();

  if (!fields) return null;

  return (
    <main className="grow min-h-screen bg-cover bg-center bg-[url('./macoswallpaper.jpg')]">
      <div className="flex flex-col items-center justify-center content-center h-screen">
        <ButtonTitleComponent
          iconName={"/1.png"}
          title={"Who am I"}
        ></ButtonTitleComponent>
        <Text>{fields.headerText}</Text>
        <InformationPanel headerText={"About This Developer"} />
      </div>
    </main>
  );
}

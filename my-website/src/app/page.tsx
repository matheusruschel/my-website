import IconComponent from "@/components/general/icon-component";
import InformationPanel from "../components/information-panel";
import ButtonTitleComponent from "@/components/general/button-title-component";

export default function Home() {
  return (
    <main className="grow min-h-screen bg-cover bg-center bg-[url('./macoswallpaper.jpg')]">
      <div className="flex flex-col items-center justify-center content-center h-screen">
        <ButtonTitleComponent
          iconName={"/1.png"}
          title={"Who am I"}
        ></ButtonTitleComponent>
        <InformationPanel headerText={"About This Developer"} />
      </div>
    </main>
  );
}

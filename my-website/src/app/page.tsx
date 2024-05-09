import Image from "next/image";
import SectionContainer from "./components/section-container";
import InformationPanel from "./components/information-panel";

export default function Home() {
  return (
    <main className="grow min-h-screen bg-cover bg-center bg-[url('./macoswallpaper.jpg')]">
      <div className="flex flex-col items-center justify-center content-center h-screen">
        
        <InformationPanel />
        {/* Folders at the top so user can click to display information on panel */}
      </div>
    </main>
  );
}

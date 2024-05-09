import Image from "next/image";
import SectionContainer from "./components/SectionContainer";

export default function Home() {
  return (
    <main className="flex flex-grow items-center justify-between min-h-screen bg-black">
      <div className="grow min-h-screen bg-cover bg-center bg-[url('./macoswallpaper.jpg')]">
        {/* Panel in the center with information that displays depending on what user clicks */}
        {/* Buttons at the bottom so user can click to display information */}
      </div>
    </main>
  );
}

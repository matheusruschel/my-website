import { ClassNameValue } from "tailwind-merge";
import Text from "./general/text-component";
import Image from "next/image";
import ProgressBarComponent from "./general/progress-bar-component";

type Props = {
  className?: ClassNameValue;
};

export default function ProfilePage(props: Props) {
  const { className } = props;
  return (
    <main className={`p-[7px] flex flex-col ${className}`}>
      <div className="items-center justify-center content-center w-full h-48 bg-white border-opacity-70 border-[2.2px] border-black shadow-sharp-blur">
        <div className="flex items-center justify-center">
          <Image
            width={150}
            height={150}
            src={"/IMG_7689.JPG"}
            alt="Icon"
            className={``}
            priority={true}
          />
          <Text className="pl-[20px] font-apple text-black !text-[120px]">
            {"Mat Ruschel"}
          </Text>
        </div>
      </div>
      <div className="flew flew-col">
        <div>
          <Text className="font-chicago-pix text-black !text-[20px]">
            {"I'm bla bla bls"}
          </Text>
        </div>
      </div>
    </main>
  );
}

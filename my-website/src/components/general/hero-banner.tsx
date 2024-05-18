import Text from "./text-component";
import Image from "next/image";

type Props = {
  title: string;
}

export default function HeroBanner(props: Props) {
  const { title } = props;
  return (
    <div className="items-center justify-center content-center p-4 bg-white border-opacity-70 border-[2.2px] border-black shadow-sharp-blur">
      <div className="flex lg:flex-row md:flex-row sm:flex-col items-center justify-center">
        <Image
          width={150}
          height={150}
          src={"/IMG_7689.JPG"}
          alt="Icon"
          priority={true}
        />
        <Text className="md:inline lg:inline pl-[20px] font-apple text-black lg:!text-[120px] md:!text-[80px] sm:!text-[55px]">
          {title}
        </Text>
      </div>
    </div>
  );
}

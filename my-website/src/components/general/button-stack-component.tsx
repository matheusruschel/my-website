import { ClassNameValue } from "tailwind-merge";
import Image from "next/image";
import ButtonTitleComponent from "./button-title-component";

type Props = {
  className?: ClassNameValue;
};

export default function ButtonStackComponent(props: Props) {
  const { className } = props;
  return (
    <main
      className={`${className}`}
    >
      <ButtonTitleComponent iconName={""} title={""}>
        
      </ButtonTitleComponent>
    </main>
  );
}

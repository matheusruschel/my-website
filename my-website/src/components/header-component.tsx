"use client"; // Ensure this component is client-side only
import { useEffect, useState } from "react";
import ButtonTitleComponent from "./general/button-title-component";
import { HEADER } from "./utils/header";
import { usePathname } from "next/navigation"; // Import useRouter

export default function Header() {
  const { headerMenus } = HEADER || {};
  const currentPath = usePathname();
  let tabSelectedIndex = 0;

  const activeIndex = headerMenus.findIndex(
    (tab) => tab.fields.url === currentPath
  );
  if (activeIndex !== -1) {
    tabSelectedIndex = activeIndex;
  }

  const [indexOfButtonSelected, setIndexOfButtonSelected] = useState(
    tabSelectedIndex
  );

  return (
    <div className="py-[15px] flex items-center justify-center content-center">
      <div className="flex">
        {headerMenus?.map((headerMenu: any, index) => (
          <ButtonTitleComponent
            key={headerMenu?.fields.buttonTitle}
            index={index}
            iconName={headerMenu?.fields.iconPath ?? "/17.png"}
            title={headerMenu?.fields.buttonTitle ?? ""}
            url={headerMenu?.fields.url}
            isSelected={indexOfButtonSelected === index}
            onClick={(buttonIndex) => setIndexOfButtonSelected(buttonIndex)}
          ></ButtonTitleComponent>
        ))}
      </div>
    </div>
  );
}

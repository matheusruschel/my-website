"use client";
import { useState } from "react";
import ButtonTitleComponent from "./general/button-title-component";
import { HEADER } from "./utils/header";

export default function Header() {
  const { headerMenus } = HEADER || {};

  const [indexOfButtonSelected, setIndexOfButtonSelected] = useState(0);

  return (
    <div className="flex items-center justify-center content-center">
      <div className="flex">
        {headerMenus?.map((headerMenu: any, index) => (
          <ButtonTitleComponent
            key={headerMenu?.fields.buttonTitle}
            index={index}
            iconName={headerMenu?.fields.iconPath ?? "/17.png"}
            title={headerMenu?.fields.buttonTitle ?? ""}
            isSelected={indexOfButtonSelected === index}
            onClick={(buttonIndex) => setIndexOfButtonSelected(buttonIndex)}
          ></ButtonTitleComponent>
        ))}
      </div>
    </div>
  );
}

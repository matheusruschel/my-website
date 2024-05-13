"use client";
import Link from "next/link";
import Text from "./general/text-component";
import { use, useState } from "react";
import Image from "next/image";
import ButtonTitleComponent from "./general/button-title-component";
import { getHeader } from "@/contentful/header";
import { HEADER } from "./utils/header";

export default function Header() {
  const { headerMenus } = HEADER || {};

  return (
    <div className="flex items-center justify-center content-center">
      <div className="flex">
        {headerMenus?.map((headerMenu: any) => (
          <ButtonTitleComponent
            key={headerMenu?.fields.buttonTitle}
            iconName={headerMenu?.fields.iconPath ?? "/17.png"}
            title={headerMenu?.fields.buttonTitle ?? ""}
          ></ButtonTitleComponent>
        ))}
      </div>
    </div>
  );
}

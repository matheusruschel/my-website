"use client";
import Link from "next/link";
import Text from "./general/text-component";
import { use, useState } from "react";
import Image from "next/image";
import ButtonTitleComponent from "./general/button-title-component";
import { getHeader } from "@/contentful/header";

export default function Header() {
  const { fields } = use(getHeader());

  const { headerButtons } = fields || {};

  return (
    <div className="flex items-center justify-center content-center">
      <div className="flex">
        {headerButtons?.map((button) => (
          <ButtonTitleComponent
            key={button?.fields.buttonTitle}
            iconName={button?.fields.iconPath ?? "/17.png"}
            title={button?.fields.buttonTitle ?? ""}
          ></ButtonTitleComponent>
        ))}
      </div>
    </div>
  );
}

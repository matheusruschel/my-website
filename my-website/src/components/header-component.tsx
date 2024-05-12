"use client";
import Link from "next/link";
import Text from "./general/text-component";
import { useState } from "react";
import Image from "next/image";
import ButtonTitleComponent from "./general/button-title-component";

export default function Header() {
  // const headerData = HEADER;

  // const { buttonsList } =
  //   headerData || {};

  return (
    <div className="flex flex-col items-center justify-center content-center">
     <ButtonTitleComponent
          iconName={"/1.png"}
          title={"Who am I"}
        ></ButtonTitleComponent>
    </div>
  );
}

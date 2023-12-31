"use client";
import React, { useMemo } from "react";

import { usePathname } from "next/navigation";

import { NavigationLink } from "@/components";
import { AmericaIcon, GermanyIcon } from "@/components/icons";

interface ISwitchLanguage {
  language: "en" | "de";
  text: string;
}
const SwitchLanguage: React.FC<ISwitchLanguage> = ({ language, text }) => {
  const pathname = usePathname();
  /*
   * using use memo makes the whole page not to rerender
   * when the active language is reseleceted
   * example: choosing english again while the current language is already english
   */
  const path = useMemo(
    //checks if the active route is the home route or not and
    //assigns a value accordingly (/de has a length of 3 so it assigns / as the route)
    () => (pathname.slice(3).length ? pathname.slice(3) : "/"),
    [pathname]
  );

  //verify active locale using the first three letters of the current route
  const isActive = pathname.slice(0, 3).includes(language);
  return (
    <NavigationLink
      style={{ color: isActive ? "white" : "" }}
      isALanguageSwitcher
      href={path}
      locale={language}
    >
      {language === "en" ? <AmericaIcon /> : <GermanyIcon />}
      {text}
    </NavigationLink>
  );
};

export default SwitchLanguage;

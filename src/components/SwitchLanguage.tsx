"use client";
import React, { useMemo } from "react";

import { usePathname } from "next/navigation";

import { NavigationLink } from "@/components";

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
      <span className="nav-flag">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900">
          <path fill="#b22234" d="M0 0h7410v3900H0z" />
          <path
            d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
            stroke="#fff"
            stroke-width="300"
          />
          <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
          <g fill="#fff">
            <g id="d">
              <g id="c">
                <g id="e">
                  <g id="b">
                    <path
                      id="a"
                      d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                    />
                    <use href="#a" y="420" />
                    <use href="#a" y="840" />
                    <use href="#a" y="1260" />
                  </g>
                  <use href="#a" y="1680" />
                </g>
                <use href="#b" x="247" y="210" />
              </g>
              <use href="#c" x="494" />
            </g>
            <use href="#d" x="988" />
            <use href="#c" x="1976" />
            <use href="#e" x="2470" />
          </g>
        </svg>
      </span>
      {text}
    </NavigationLink>
  );
};

export default SwitchLanguage;

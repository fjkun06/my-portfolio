"use client";
import React, { useMemo } from "react";

import { usePathname } from "next/navigation";

import { Link } from "./LanguageSwitcher";
import NavigationLink from "./NavigationLink";

const SwitchLanguage = () => {
  const pathname = usePathname();
  // console.log(pathname);
  // console.log(pathname.length);
  // console.log(pathname.slice(3));

  const path = useMemo(
    () => (pathname.slice(3).length ? pathname.slice(3) : "/"),
    [pathname]
  );
  return (
    <div>
      LanguageSwitcher <br />
      <Link href={path} locale="de">
        Switch to German
      </Link>
      <br />
      <Link href={path} locale="en">
        Switch to English
      </Link>{" "}
      <br />
      <NavigationLink href="/about">About</NavigationLink>
    </div>
  );
};

export default SwitchLanguage;

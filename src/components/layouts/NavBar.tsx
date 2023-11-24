"use client";
import React, { useMemo } from "react";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import NavigationLink from "@/app/[locale]/NavigationLink";

interface INavBar {
  children?: string[];
}

const NavBar: React.FC<INavBar> = ({ children = [] }) => {
  const pathname = usePathname();

  const path = useMemo(
    () => (pathname.slice(3).length ? pathname.slice(3) : "/"),
    [pathname]
  );
  return (
    <motion.nav>
      <div className="links-group">
        {/* <NavigationLink href="/about1" className="">
          <motion.span layoutId="underline" />
          frank jordan zone
        </NavigationLink>
        <NavigationLink href="/about2">
          <motion.span layoutId="underline" />
          _hello
        </NavigationLink> */}
        <NavigationLink href="/about">
          {path === "/about" && (
            <motion.span
              transition={{ ease: "easeInOut", duration: 0.35 }}
              layoutId="underline"
              className="underline"
            />
          )}
          _about-me
        </NavigationLink>
        <NavigationLink href="/about1" className="">
          frank jordan zone
        </NavigationLink>

        <NavigationLink href="/">
          {path === "/" && (
            <motion.span
              transition={{ ease: "easeInOut", duration: 0.35 }}
              layoutId="underline"
              className="underline"
            />
          )}
          _projects
        </NavigationLink>
      </div>
      <div className="">
        <NavigationLink href="/about">_language</NavigationLink>
        <NavigationLink href="/">_projects</NavigationLink>
      </div>
    </motion.nav>
  );
};

export default NavBar;

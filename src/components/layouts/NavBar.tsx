"use client";
import React, { memo } from "react";

import { motion } from "framer-motion";

import NavigationLink from "@/app/[locale]/NavigationLink";
import { MenuIcon } from "@/components/icons";

interface INavBar {
  // children?: string[];
}

const NavBar: React.FC<INavBar> = ({ children = [] }) => {
  return (
    <motion.nav>
      <div className="links-group">
        <NavigationLink href="/about2">
          <span className="">frank jordan zone</span>
          <MenuIcon />
        </NavigationLink>
        <NavigationLink href="/about2">_hello</NavigationLink>
        <NavigationLink href="/">_projects</NavigationLink>
        <NavigationLink href="/about">_about</NavigationLink>
      </div>
      <div className="">
        <NavigationLink href="/aboutt">_language</NavigationLink>
        <NavigationLink href="/e">_projects</NavigationLink>
      </div>
    </motion.nav>
  );
};

export default memo(NavBar);

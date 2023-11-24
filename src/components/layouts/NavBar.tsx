import React from "react";

import NavigationLink from "@/app/[locale]/NavigationLink";

interface INavBar {
  children?: string[];
}

const NavBar: React.FC<INavBar> = ({ children = [] }) => {
  return (
    <nav>
      <div className="links-group">
        <NavigationLink href="/about">frank jordan zone</NavigationLink>
        <NavigationLink href="/about">_hello</NavigationLink>
        <NavigationLink href="/about">_about-me</NavigationLink>
        <NavigationLink href="/">_projects</NavigationLink>
      </div>
      <div className="">
        <NavigationLink href="/about">_language</NavigationLink>
        <NavigationLink href="/">_projects</NavigationLink>
      </div>
    </nav>
  );
};

export default NavBar;

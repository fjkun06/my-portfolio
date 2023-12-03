import React from "react";

import SideNavigationItem from "@/components/SideNavigationItem";

import { sideNavigationDate } from "./data";
interface ISideNavigation {
  swiperFunction: any;
  currentIndex: number;
  routes: string[];
}
const SideNavigation: React.FC<ISideNavigation> = ({ routes, ...props }) => {
  return (
    <aside>
      <div className="side-navigation">Hello</div>
    </aside>
  );
};

export default SideNavigation;

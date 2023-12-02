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
      {sideNavigationDate.map((data, i) => (
        <SideNavigationItem {...props} {...data} text={routes[i]} index={i + 1} key={i} />
      ))}
    </aside>
  );
};

export default SideNavigation;

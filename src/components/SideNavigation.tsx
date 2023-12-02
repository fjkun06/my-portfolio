import React from "react";

import SideNavigationItem from "@/components/SideNavigationItem";

import { sideNavigationDate } from "./data";
interface ISideNavigation {
  swiperFunction: any;
  currentIndex: number;
}
const SideNavigation: React.FC<ISideNavigation> = (props) => {
  return (
    <aside>
      {sideNavigationDate.map((data, i) => (
        <SideNavigationItem {...props} {...data} index={i + 1} key={i} />
      ))}
    </aside>
  );
};

export default SideNavigation;

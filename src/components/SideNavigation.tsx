"use client";
import React from "react";

import { CrossIcon, PlusIcon } from "@/components/icons";
import SideNavigationItem from "@/components/SideNavigationItem";

import { sideNavigationDate } from "./data";
interface ISideNavigation {
  swiperFunction: any;
  currentIndex: number;
  routes: string[];
}
const SideNavigation: React.FC<ISideNavigation> = ({ routes, ...props }) => {
  const [state, setState] = React.useState(false);

  return (
    <aside>
      <div
        className={`side-navigation ${state ? "aside--open" : ""}`}
        onMouseLeave={() => setState(false)}
      >
        <span className="active heading">
          {sideNavigationDate[props.currentIndex].icon}
          {routes[props.currentIndex]}
        </span>
        {sideNavigationDate.map((data, i) => (
          <SideNavigationItem
            {...props}
            {...data}
            text={routes[i]}
            index={i + 1}
            key={i}
            callback={() => setState(false)}
          />
        ))}
      </div>
      {state ? (
        <CrossIcon
          className="plus-icon"
          onClick={() => setState(false)}
          onMouseEnter={() => setState(true)}
        />
      ) : (
        <PlusIcon className="plus-icon" onClick={() => setState(true)} />
      )}
    </aside>
  );
};

export default SideNavigation;

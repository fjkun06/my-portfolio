"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { PlusIcon } from "@/components/icons";
import SideNavigationItem from "@/components/SideNavigationItem";

import { sideNavigationDate } from "./data";
interface ISideNavigation {
  swiperFunction: any;
  currentIndex: number;
  routes: string[];
}
const SideNavigation: React.FC<ISideNavigation> = ({ routes, ...props }) => {
  const [state, setState] = React.useState(false);
  const [strings, setStrings] = React.useState(routes);
  console.log(strings[props.currentIndex]);

  return (
    <aside>
      <motion.div
        className={`side-navigation ${state ? "aside--open" : ""}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeInOut" } }}
        exit={{ y: -20, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
      >
        <AnimatePresence>
          <span className="active heading">
            {sideNavigationDate[props.currentIndex].icon}
            {strings[props.currentIndex]}
          </span>
          {sideNavigationDate.map((data, i) => (
            <SideNavigationItem
              {...props}
              {...data}
              text={routes[i]}
              index={i + 1}
              key={i}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      <PlusIcon
        className="plus-icon"
        onClick={() => setState(!state)}
        onMouseLeave={() => setState(false)}
      />
    </aside>
  );
};

export default SideNavigation;

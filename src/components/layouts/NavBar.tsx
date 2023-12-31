"use client";
import React, { memo } from "react";

import dynamic from "next/dynamic";

import { NavbarHeader } from "@/components";
import useMediaQuery from "@/utils/useMediaQuery";

const NavbarContactLanguage = dynamic(
  () => import("@/components/NavbarContactLanguage"),
  {
    ssr: true
  }
);
const NavbarRoutes = dynamic(() => import("@/components/NavbarRoutes"), {
  ssr: true
});

interface INavBar {
  items: string[][];
}

const NavBar: React.FC<INavBar> = ({ items = [[]] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  //useEffect to reset content display
  React.useEffect(() => {
    () => setIsOpen(true);
  });

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  //verifies if the screen width is more than 1200px and toggles the navbar height
  const closeMenu = () => !max1300 && setIsOpen(false);
  const max1300 = useMediaQuery("(width > 1300px)");

  //useEffect to reset navbar in large screens
  React.useEffect(() => {
    const resetNavbar = () => {
      if (max1300) setIsOpen(true);
    };

    resetNavbar();
  }, [max1300]);

  //contact item holder
  const contact = items.slice(-1)[0];

  return (
    <nav>
      <div className={`navbar navbar--${isOpen ? "open" : "closed"}`}>
        <NavbarHeader name="frank jordan zoné" isOpen={isOpen} toggleOpen={toggleOpen} />
        {isOpen && (
          <>
            <NavbarRoutes items={items} closeMenu={closeMenu} />
            <NavbarContactLanguage contact={contact} closeMenu={closeMenu} />
          </>
        )}
      </div>
    </nav>
  );
};

export default memo(NavBar);

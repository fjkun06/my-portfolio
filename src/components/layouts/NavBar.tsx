"use client";
import React, { memo } from "react";

import { AnimatePresence, motion } from "framer-motion";

import NavigationLink from "@/app/[locale]/NavigationLink";
import { MenuIcon } from "@/components/icons";
import useMediaQuery from "@/utils/useMediaQuery";

interface INavBar {
  items: string[][];
}

const NavBar: React.FC<INavBar> = ({ items = [[]] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  //verifies if the screen width is more than 1200px and toggles the navbar height
  const closeMenu = () => !max1200 && setIsOpen(false);
  const max1200 = useMediaQuery("(width > 1200px)");

  //useEffect to reset navbar in large screens
  React.useEffect(() => {
    const resetNavbar = () => {
      if (max1200) setIsOpen(true);
    };

    resetNavbar();
  }, [max1200]);

  //contact item holder
  const contact = items.slice(-1)[0];

  return (
    <motion.nav
      animate={{ height: isOpen ? "100%" : "7%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="nav-toggle">
        <div className="navbar-link">
          <span className="">frank jordan zoné</span>
          <MenuIcon isOpen={isOpen} callback={toggleOpen} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <NavBarGroup>
              {items.length &&
                items.slice(0, 3).map(([text, href], index) => (
                  <NavigationLink key={index} callback={closeMenu} href={href}>
                    {text}
                  </NavigationLink>
                ))}
            </NavBarGroup>
            <NavBarGroup className="links-group">
              <NavigationLink callback={closeMenu} href="/aboutt">
                _en
              </NavigationLink>
              <NavigationLink callback={closeMenu} href="/aboutt">
                _de
              </NavigationLink>
              <NavigationLink callback={closeMenu} href={contact[1]}>
                {contact[0]}
              </NavigationLink>
            </NavBarGroup>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default memo(NavBar);

const NavBarGroup = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

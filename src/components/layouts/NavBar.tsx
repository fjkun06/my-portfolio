"use client";
import React, { memo } from "react";

import { AnimatePresence, motion } from "framer-motion";

import NavigationLink from "@/app/[locale]/NavigationLink";
import { MenuIcon } from "@/components/icons";

interface INavBar {
  children?: string[];
}

const NavBar: React.FC<INavBar> = ({ children = [] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <motion.nav
      animate={{ height: isOpen ? "100%" : "7%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="nav-toggle">
        <div className="navbar-link">
          <span className="">frank jordan zone</span>
          <MenuIcon isOpen={isOpen} callback={toggleOpen} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className=""
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
            >
              <NavigationLink callback={closeMenu} href="/about2">
                _hello
              </NavigationLink>
              <NavigationLink callback={closeMenu} href="/">
                _projects
              </NavigationLink>
              <NavigationLink callback={closeMenu} href="/about">
                _about
              </NavigationLink>
            </motion.div>
            <motion.div
              className="links-group"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
            >
              <NavigationLink callback={closeMenu} href="/aboutt">
                _language
              </NavigationLink>
              <NavigationLink callback={closeMenu} href="/e">
                _projects
              </NavigationLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default memo(NavBar);

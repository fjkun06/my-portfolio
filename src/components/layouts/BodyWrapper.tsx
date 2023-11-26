"use client";
import React, { createContext, useState } from "react";

import { Footer, NavBar } from "@/components";

interface IBodyWrapper {
  children: React.ReactNode | React.ReactNode[];
  routes: string[][];
}
export const NavbarContext = createContext<any>(null);
const BodyWrapper: React.FC<IBodyWrapper> = ({ children, routes }) => {
  const [isNavbarOpen, setState] = useState(true);

  //useEffect to reset content display
  React.useEffect(() => {
    () => setState(true);
  });

  return (
    <NavbarContext.Provider value={{ isNavbarOpen, setState }}>
      <body>
        <NavBar items={routes} />
        {isNavbarOpen && children}
        <Footer />
      </body>
    </NavbarContext.Provider>
  );
};

export default BodyWrapper;

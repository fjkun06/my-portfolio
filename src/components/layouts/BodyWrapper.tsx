import React from "react";

import { Footer, NavBar } from "@/components";

interface IBodyWrapper {
  children: React.ReactNode | React.ReactNode[];
  routes: string[][];
  footerText: string;
}
const BodyWrapper: React.FC<IBodyWrapper> = ({ children, routes, footerText }) => {
  return (
    <body>
      <NavBar items={routes} />
      {children}
      <Footer findMe={footerText} />
    </body>
  );
};

export default BodyWrapper;

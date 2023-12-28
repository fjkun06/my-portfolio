import React from "react";

import dynamic from "next/dynamic";

import { NavBar } from "@/components";
const Footer = dynamic(() => import("@/components/layouts/Footer"), {
  ssr: false
});

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

import React from "react";

interface IPageWrapper {
  children: React.ReactNode;
}
const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return <main>{children}</main>;
};

export default PageWrapper;

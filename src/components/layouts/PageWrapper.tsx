"use client";
import React from "react";

import { motion } from "framer-motion";
interface IPageWrapper {
  children: React.ReactNode;
}
const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return (
    <motion.main
      initial={{ y: 20, opacity: 0 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeInOut" } }}
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;

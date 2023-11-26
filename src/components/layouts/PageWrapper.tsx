"use client";
import React from "react";

import { motion } from "framer-motion";

interface IPageWrapper {
  children: React.ReactNode;
}
const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: 20, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;

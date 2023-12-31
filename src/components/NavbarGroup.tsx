"use client";
import { motion } from "framer-motion";

const NavbarGroup = ({
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
      animate={{ x: 0, opacity: 1, transition: { duration: 0.25, ease: "easeInOut" } }}
    >
      {children}
    </motion.div>
  );
};

export default NavbarGroup;

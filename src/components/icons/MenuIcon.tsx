import React from "react";

import { motion } from "framer-motion";

interface IMenuIcon extends React.HTMLAttributes<HTMLSpanElement> {
  isOpen: boolean;
  callback: () => void;
}
const MenuIcon: React.FC<IMenuIcon> = ({ isOpen, callback }) => {
  return (
    <motion.span className="" onClick={callback}>
      <motion.svg
        stroke="currentColor"
        fill="none"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        color={isOpen ? "white" : ""}
      >
        <motion.path
          d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12
         7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H12Z"
          fill="currentColor"
          initial={{ pathLength: 0 }}
          transition={{
            pathLength: { type: "spring", duration: 1.5, bounce: 0 }
          }}
          // animate={{ pathLength: 1 }}
        />
        <motion.path
          d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17
         12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z"
          fill="currentColor"
          initial={{ pathLength: 0 }}
          transition={{
            pathLength: { type: "spring", duration: 1.5, bounce: 0 }
          }}
          // animate={{ pathLength: 1 }}
        />
        <motion.path
          d="M3 18C3 17.4477 3.44772 17 4 17H12C12.5523 17 13 17.4477 13
         18C13 18.5523 12.5523 19 12 19H4C3.44772 19 3 18.5523 3 18Z"
          fill="currentColor"
          initial={{ pathLength: 0 }}
          transition={{
            pathLength: { type: "spring", duration: 1.5, bounce: 0 }
          }}
          // animate={{ pathLength: 1 }}
        />
      </motion.svg>
    </motion.span>
  );
};

export default MenuIcon;

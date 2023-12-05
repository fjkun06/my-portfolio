"use client";
import React from "react";

import { useInView, motion } from "framer-motion";

const Section = ({
  children,
  className
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section ref={ref} className={className}>
      {/* <motion.span
        style={
          {
            // transitionTimingFunction: "cubic-bezier(0.17, 0.55, 0.55, 1)"
          }
        }
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: isInView ? 0 : "-200px",
          opacity: isInView ? 1 : 0,
          transition: {
            duration: 0.9,
            delay: 0.25,
            ease: "easeInOut"
          }
        }}
      > */}
      {children}
      {/* </motion.span> */}
      {/* <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span> */}
    </section>
  );
};

export default Section;

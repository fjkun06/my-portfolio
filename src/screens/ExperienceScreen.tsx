"use client";
import React from "react";

import { useInView, motion } from "framer-motion";

import { ListItem } from "@/components";

const ExperienceScreen = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <section ref={ref}>
      <motion.div
        className="about-education--school"
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
      >
        <h2>Work Experience</h2>
      </motion.div>
      <motion.div
        className="about-education--interests"
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
        transition={{ delay: 0.25, type: "spring" }}
      >
        <h2>Omoh Eveywhere Red Ooo</h2>
      </motion.div>
    </section>
  );
};

export default ExperienceScreen;

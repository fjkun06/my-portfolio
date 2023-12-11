"use client";
import React from "react";

import { useInView, motion } from "framer-motion";

import { ExperienceCard, ListItem } from "@/components";

const ExperienceScreen = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <section ref={ref} className="about-experience">
      <motion.div
        className=""
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
      >
        <h2>Work Experience</h2>
      </motion.div>
      <motion.div
        className="about-experience--list"
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
        transition={{ delay: 0.25, type: "spring" }}
      >
        <ExperienceCard />
        <ExperienceCard />
      </motion.div>
    </section>
  );
};

export default ExperienceScreen;

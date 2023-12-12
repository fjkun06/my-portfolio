"use client";
import React from "react";

import { useInView, motion } from "framer-motion";

import { ExperienceCard } from "@/components";
import { IExperienceCard } from "@/components/ExperienceCard";

interface IExperience {
  experience: IExperienceData;
}

export interface IExperienceData extends IExperienceCard {
  xp1: string;
  xp2: string;
}
const ExperienceScreen = ({ experience: { title, xp1, xp2, data } }: IExperience) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  console.log(title);

  return (
    <section ref={ref} className="about-experience">
      <motion.div
        className=""
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
      >
        <h2>{title}</h2>
      </motion.div>
      <motion.div
        className="about-experience--list"
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
        transition={{ delay: 0.25, type: "spring" }}
      >
        {[
          [xp1, data.slice(0, 3)],
          [xp2, data.slice(3)]
        ].map(([title, data], i) => (
          <ExperienceCard key={i} title={title as string} data={data as string[]} />
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceScreen;

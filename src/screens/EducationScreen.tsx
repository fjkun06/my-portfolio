"use client";
import React from "react";

import { useInView, motion } from "framer-motion";

import SchoolCard, { ISchoolCard } from "@/components/SchoolCard";
export interface IEducation {
  school: {
    title: string;
    data: ISchoolCard[];
  };
  interests: {
    title: string;
    data: string[];
  };
}
const EducationScreen = ({ school, interests }: IEducation) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <section ref={ref} className="about-education">
      <motion.div
        className="about-education--school"
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
      >
        <h2>{school.title}</h2>
        {school.data.map((data) => (
          <SchoolCard {...data} key={data.name} />
        ))}
      </motion.div>
      <motion.div
        className="about-education--interests"
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
        transition={{ delay: 0.25, type: "spring" }}
      >
        <h2>{interests.title}</h2>
        <ul>
          {interests.data.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default EducationScreen;

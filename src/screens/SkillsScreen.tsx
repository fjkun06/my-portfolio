"use client";

import React from "react";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ListItem } from "@/components";

import { logoData } from "./data";
import { List } from "./EducationScreen";
const SkillsScreen = ({ softSkills }: { softSkills: List }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section ref={ref} className="about-skills">
      <motion.div
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
        className="about-skills--soft"
      >
        <h2>{softSkills.title}</h2>
        <ul>
          {softSkills.data.map((skill) => (
            <ListItem key={skill} text={skill} />
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="about-skills--hard"
        animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
      >
        <h2>Technologies and Tools</h2>
        <div className="logos-slide">
          {logoData.map((logo, i) => (
            <Link key={i} href={logo.url} target="_blank" passHref={true}>
              <span className="">{logo.title}</span>
              <Image
                src={`/assets/icons/icon${i + 1}.svg`}
                alt="logo"
                height={30}
                width={30}
                className="myLogo"
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsScreen;

"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { ProjectCard } from "@/components";

import { experienceSkills, projects } from "./data";

interface IProjectsScreen {
  title: string;
  descriptions: Array<string>;
}

const ProjectsScreen: React.FC<IProjectsScreen> = ({ title, descriptions }) => {
  return (
    <div className="portfolio-projects">
      <motion.h1
        animate={{
          y: [10, -10, 0],
          opacity: [0, 1],
          transition: { delay: 0.1, duration: 0.5 }
        }}
        transition={{ type: "spring", ease: "easeInOut" }}
      >
        {title}
      </motion.h1>
      <motion.section layout>
        {/* <ProjectCard skills={experienceSkills.wandaprep} />
        <ProjectCard skills={experienceSkills.wandaprep} />
        <ProjectCard skills={experienceSkills.wandaprep} />
        <ProjectCard skills={experienceSkills.wandaprep} /> */}

        {projects.map((project, i) => (
          <ProjectCard {...project} description={descriptions[i]} key={i} />
        ))}
      </motion.section>
    </div>
  );
};

export default ProjectsScreen;

"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { ProjectCard } from "@/components";

const ProjectsScreen = () => {
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
        Projects
      </motion.h1>
      <motion.section layout>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </motion.section>
    </div>
  );
};

export default ProjectsScreen;

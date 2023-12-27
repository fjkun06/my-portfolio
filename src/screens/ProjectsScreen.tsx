"use client";
import React from "react";

import dynamic from "next/dynamic";

import { projects } from "./data";

const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  ssr: false
});

interface IProjectsScreen {
  title: string;
  descriptions: Array<string>;
}

const ProjectsScreen: React.FC<IProjectsScreen> = ({ title, descriptions }) => {
  return (
    <div className="portfolio-projects">
      <h1>{title}</h1>
      <section>
        {projects.map((project, i) => (
          <ProjectCard {...project} description={descriptions[i]} key={i} />
        ))}
      </section>
    </div>
  );
};

export default ProjectsScreen;

"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

import { GithubIcon, GlobeIcon } from "@/components/icons";
export interface IProjectCard {
  title?: string;
  description?: string;
  skills?: string[];
  repoUrl?: string;
  liveUrl?: string;
  src?: string;
  index: number;
}
const ProjectCard = ({
  title,
  description,
  repoUrl,
  liveUrl,
  skills,
  src,
  index
}: IProjectCard) => {
  const links = [
    {
      href: repoUrl,
      icon: <GithubIcon />,
      cls: "repository",
      text: "Github Repository"
    },
    {
      href: liveUrl,
      icon: <GlobeIcon />,
      cls: "live-version",
      text: "Live Version"
    }
  ];

  const delay = 0.65 + index * 0.5;
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.65, 1],
        scale: [1.03, 1.015, 1],
        transition: { delay, duration: 0.5 }
      }}
    >
      <div className="image">
        <Image
          src={`/assets/images/${src}`}
          width={400}
          height={200}
          alt="project-picture"
          priority
          quality={100}
        />
      </div>
      <div className="data">
        <h2 className="">{title ?? "Project Title"}</h2> <hr />
        <p>{description}</p>
        <div className="technologies">
          {skills?.map((skill) => (
            <span className="pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <div className="links">
          {[
            links.map(({ href, icon, cls, text }) => (
              <span key={cls}>
                <Link
                  href={href as string}
                  target="_blank"
                  passHref={true}
                  className={cls}
                >
                  {icon}
                </Link>
                <Tooltip anchorSelect={`.${cls}`} place="top" variant="light">
                  <span>{text}</span>
                </Tooltip>
              </span>
            ))
          ]}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

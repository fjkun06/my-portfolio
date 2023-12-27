"use client";
import React from "react";

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
}
const ProjectCard = ({
  title,
  description,
  repoUrl,
  liveUrl,
  skills,
  src
}: IProjectCard) => {
  const links = [
    {
      href: repoUrl,
      icon: <GithubIcon />,
      cls: "repo",
      text: "Github Repository"
    },
    {
      href: liveUrl,
      icon: <GlobeIcon />,
      cls: "live",
      text: "Live Version"
    }
  ];
  return (
    <article>
      <div className="image">
        <Image src={src as string} width={400} height={300} alt="project-picture" />
      </div>
      <div className="data">
        <h3 className="">{title ?? "Project Title"}</h3> <hr />
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
              <>
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
              </>
            ))
          ]}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

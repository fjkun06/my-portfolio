import React from "react";

import Image from "next/image";
import Link from "next/link";

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
          <Link href={repoUrl as string} target="_blank" passHref={true}>
            <GithubIcon />
          </Link>
          <Link href={liveUrl as string} target="_blank" passHref={true}>
            <GlobeIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

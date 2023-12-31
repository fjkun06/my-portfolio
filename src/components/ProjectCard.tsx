import React from "react";

import dynamic from "next/dynamic";
import Link from "next/link";

const ProjectCardImage = dynamic(() => import("@/components/ProjectCardImage"), {
  ssr: true
});
const ProjectCardLink = dynamic(() => import("@/components/ProjectCardLink"), {
  ssr: false
});
const GithubIcon = dynamic(() => import("@/components/icons/GithubIcon"), {
  ssr: false
});
const GlobeIcon = dynamic(() => import("@/components/icons/GlobeIcon"), {
  ssr: false
});

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

  return (
    <article>
      {src && <ProjectCardImage src={`/assets/images/projects/${src}`} />}
      <div className="data">
        {title && (
          <>
            <h2>{title}</h2>
            <hr />
          </>
        )}
        {description && <p>{description}</p>}
        {skills && (
          <div className="technologies">
            {skills.map((skill) => (
              <span className="pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        )}
        <div className="links">
          {[links.map((props) => <ProjectCardLink {...props} key={props.cls} />)]}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

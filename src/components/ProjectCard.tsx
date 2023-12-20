import React from "react";

import Image from "next/image";

import { GithubIcon, LinkIcon } from "@/components/icons";
export interface IProjectCard {
  title?: string;
  description?: string[];
  skills?: string[];
  repoUrl?: string;
  liveUrl?: string;
}
const ProjectCard = ({ title, description, repoUrl, liveUrl, skills }: IProjectCard) => {
  return (
    <article>
      {/* <Image src="/assets/images/image.jpg" width={400} height={300} alt="" /> */}
      <div className="image">
        <Image src="/assets/images/image2.png" width={400} height={300} alt="" />
      </div>
      <div className="data">
        <h3 className="">{title ?? "Project Title"}</h3> <hr/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores illo
          nemo nobis adipisci cupiditate ad excepturi, sed dolorem omnis reiciendis
          praesentium officiis hic dicta assumenda reprehenderit vel impedit magnam.
        </p>
        <div className="technologies">
          {skills?.map((skill) => (
            <span className="pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <div className="links">
          <GithubIcon callback={() => console.log("hello world")} />
          <LinkIcon callback={() => console.log("hello world")} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

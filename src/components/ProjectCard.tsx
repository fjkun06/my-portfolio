import React from "react";

import Image from "next/image";

import { GithubIcon, GlobeIcon, LinkIcon } from "@/components/icons";
export interface IProjectCard {
  title?: string;
  description?: string[];
  skills?: string[];
  repoUrl?: string;
  liveUrl?: string;
  src?: string;
}
const ProjectCard = ({ title, description, repoUrl, liveUrl, skills }: IProjectCard) => {
  return (
    <article>
      {/* <Image src="/assets/images/image.jpg" width={400} height={300} alt="" /> */}
      <div className="image">
        <Image
          src="/assets/images/flippbidd.png"
          width={400}
          height={300}
          alt="project-picture"
        />
      </div>
      <div className="data">
        <h3 className="">{title ?? "Project Title"}</h3> <hr />
        <p>
          {/* Developed the FlippBidd landing page, a stunning showcase of frontend
          development skills. This aesthetically pleasing landing page was meticulously
          designed and developed to be pixel-perfect, highlighting creativity and
          attention to details. */}
          {/* An aesthetically pleasing and fully responsive frontend project that
          accommodates two languages flawlessly. Leveraging expertise in Figma and i18n,
          this landing page was meticulously crafted. Throughout the project, I maintained
          close collaboration with the client, ensuring their vision was accurately
          translated into a user-friendly design. Notably, a WhatsApp functionality was
          implemented, directing users to WhatsApp upon clicking a specific button. */}
          {/* Brytzone, a comprehensive multilingual educational platform tailored for
          University students. It empowers students to stay up-to-date with the latest
          information in their faculty/school, find valuable internships, actively
          participate in polls to enhance their academics, and gain exposure through
          projects to potentially secure employment opportunities even before leaving the
          university. */}
          Led the development of a Multilingual website for a web development and
          consulting company, &quot;Digital,&quot; in collaboration with a
          cross-functional team. The project encompassed various technologies and skills
          to achieve optimal results.
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
          <GlobeIcon callback={() => console.log("hello world")} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

import React from "react";

import { experienceSkills } from "@/screens/data";

export interface IExperienceCard {}
const ExperienceCard = ({}: IExperienceCard) => {
  return (
    <article>
      <div className="data">
        <div className="info">
          <h3 className="">Frontend Developer @ WandaPrep</h3>
          <div className="date">
            <span className="">Jan</span>
            <span className=""> — </span>
            <span className="">Nov 2023</span>
          </div>
        </div>
        <ul>
          <li>
            Nutzung verschiedener Front-End-Technologien für die Gestaltung von Ansichten,
            was zu einer beachtlichen Steigerung der Benutzeraktivität um 20 % führte.
          </li>
          <li>
            Spielte eine aktive Rolle bei der Bereitstellung wertvoller Einblicke für
            interne Stakeholder und bewies dabei ein Verständnis für komplexe technische
            Zusammenhänge.
          </li>
          <li>
            Unermüdliches Engagement beim Erlernen und Anwenden neuer Technologien und
            Methoden.
          </li>
          {/* <li>
            Utilized diverse front-end technologies to design views, yielding a notable
            20% rise in user engagement.
          </li>
          <li>
            Played an active role in providing valuable insights to internal stakeholders,
            demonstrating a grasp of complex technicalities.
          </li>
          <li>
            Showcased unwavering commitment to learning and applying new technologies and
            methodologies.
          </li> */}
        </ul>
        <div className="technologies">
          {experienceSkills.wandaprep.map((skill) => (
            <span className="pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;

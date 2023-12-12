import React from "react";

import { experienceSkills } from "@/screens/data";

export interface IExperienceCard {}
const ExperienceCard = ({}: IExperienceCard) => {
  return (
    <article>
      <div className="date">
        <span className="">Jan</span>
        <span className=""> — </span>
        <span className="">Nov 2023</span>
      </div>
      <div className="data">
        <h3 className="">Frontend Developer @ WandaPrep</h3>
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

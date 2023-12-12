import React from "react";

import { experienceSkills } from "@/screens/data";

export interface IExperienceCard {
  title: string;
  data: string[];
  date?: string;
}
const ExperienceCard = ({ title, data, date }: IExperienceCard) => {
  return (
    <article>
      <div className="data">
        <div className="info">
          <h3 className="">{title}</h3>
          <div className="date">{date}</div>
        </div>
        <ul>
          {data.map((el) => (
            <li key={el}>{el}</li>
          ))}
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

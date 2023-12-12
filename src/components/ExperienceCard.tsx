import React from "react";

import { experienceSkills } from "@/screens/data";

export interface IExperienceCard {
  title: string;
  data: string[];
}
const ExperienceCard = ({ title, data }: IExperienceCard) => {
  return (
    <article>
      <div className="data">
        <div className="info">
          <h3 className="">{title}</h3>
          {/* <h3 className="">Frontend Developer @ WandaPrep</h3> */}
          <div className="date">
            <span className="">Jan</span>
            <span className=""> — </span>
            <span className="">Nov 2023</span>
          </div>
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

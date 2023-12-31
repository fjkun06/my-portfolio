import React from "react";

export interface IExperienceCard {
  title: string;
  data: string[];
  skills?: string[];
  date?: string;
}
const ExperienceCard = ({ title, data, date, skills }: IExperienceCard) => {
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
          {skills?.map((skill) => (
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

import React from "react";

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
          <li>hello 1</li>
          <li>hello 2</li>
          <li>hello 3</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

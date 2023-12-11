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
          <li>
            Utilized diverse front-end technologies to design views, yielding a notable
            20% rise in user engagement and a significant 15% decrease in bounce rates.
          </li>
          <li>
            Played an active role in providing valuable insights to internal stakeholders,
            directly influencing project decisions and demonstrating a robust grasp of
            complex technicalities.
          </li>
          <li>
            Showcased unwavering commitment to learning and applying new technologies and
            methodologies, resulting in a notable 10% reduction in project development
            time.
          </li>
        </ul>
        <div className="technologies">
          <span className="pill">React.js</span>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;

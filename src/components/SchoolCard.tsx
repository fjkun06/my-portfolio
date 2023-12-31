import React from "react";
export interface ISchoolCard {
  name: string;
  endDate: string;
  grade: string;
  field: string;
}
const SchoolCard = ({ name, endDate, grade, field }: ISchoolCard) => {
  return (
    <article>
      <h3>{field}</h3>
      <p>
        <span className="university">{name}</span>
        <span className="year">
          <span>2019</span> - <span>{endDate}</span>
        </span>
        <span className="grade">
          <span>{grade}</span>
        </span>
      </p>
    </article>
  );
};

export default SchoolCard;

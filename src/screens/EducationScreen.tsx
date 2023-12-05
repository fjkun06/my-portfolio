"use client";
import React from "react";

import SchoolCard, { ISchoolCard } from "@/components/SchoolCard";
export interface IEducation {
  school: {
    title: string;
    data: ISchoolCard[];
  };
  interests: {
    title: string;
    data: string[];
  };
}
const EducationScreen = ({ school, interests }: IEducation) => {
  console.log(interests);

  return (
    <section className="about-education">
      <div className="about-education--school">
        <h2>{school.title}</h2>
        {school.data.map((data) => (
          <SchoolCard {...data} key={data.name} />
        ))}
      </div>
      <div className="about-education--interests">
        <h2>{interests.title}</h2>
        <ul>
          {interests.data.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EducationScreen;

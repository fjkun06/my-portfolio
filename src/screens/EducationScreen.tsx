"use client";
import React from "react";
export interface IEducation {}
const EducationScreen = ({}: IEducation) => {
  return (
    <section className="about-education">
      <div className="about-education--school">
        {/* <h2>Education</h2> */}
        <h2>Bildung</h2>
        <article>
          {/* <h3>Bachelor of Technology in Computer Engineering</h3> */}
          <h3>Bachelor of Technology in Technischer Informatik</h3>
          <p>
            <span className="university">University of Buea</span>
            <span className="year">
              <span>2019</span> - <span>2023</span>
            </span>
            <span className="grade">
              <span>Grade</span>: 3.23
            </span>
          </p>
        </article>
        <article>
          {/* <h3>Bachelor of Technology in Computer Engineering</h3> */}
          <h3>Bachelor of Technology in Technischer Informatik</h3>
          <p>
            <span className="university">University of Buea</span>
            <span className="year">
              <span>2019</span> - <span>2023</span>
            </span>
            <span className="grade">
              <span>Grade</span>: 3.23
            </span>
          </p>
        </article>
      </div>
      <div className="about-education--interests">
        {/* <h2>Interests && Hobbies</h2> */}
        <h2>Interessen && Hobbys</h2>
        <ul>
          <li>Technology Trends</li>
          <li>Reading Books (Psychology)</li>
          <li>Sports (Football, Basketball)</li>
          <li>Reasearch and Discovery</li>
          <li>Artificial Intelligence</li>
          <li>Doing amazing stuff with Code</li>
          <li>Japanese Anime</li>
          <li>Gym workouts</li>
        </ul>
      </div>
    </section>
  );
};

export default EducationScreen;

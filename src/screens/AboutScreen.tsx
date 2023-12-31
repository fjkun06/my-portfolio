"use client";
import React from "react";

import dynamic from "next/dynamic";
import { Swiper } from "swiper/react";

const SideNavigation = dynamic(() => import("@/components/SideNavigation"), {
  ssr: true
});
const AboutSlideContainer = dynamic(() => import("@/components/AboutSlideContainer"), {
  ssr: true
});

import { IEducation, List } from "./EducationScreen";
import { IExperienceData } from "./ExperienceScreen";
import { ISummary } from "./SummaryScreen";

//interface containing translated text for all sections
interface IAboutScreen {
  data: {
    routes: string[];
    summary: ISummary["summary"];
    education: IEducation;
    skills: List;
    experience: IExperienceData;
  };
}
const AboutScreen: React.FC<IAboutScreen> = ({
  data: { routes, summary, education, skills, experience }
}) => {
  //sythax for calling using the Swiper instance in React TypScript
  const [swiper, setSwiper] = React.useState<typeof Swiper>();

  // state that has the current active index,
  //which can be used to force re - rende other components
  const [activeIndex, setActiveIndex] = React.useState(0);

  const configureIndex = (index: number) => setActiveIndex(index);
  const configureSwiper = (swipe: any) => setSwiper(swipe);

  const props = { summary, education, skills, experience };
  return (
    <div className="portfolio-about">
      <SideNavigation
        currentIndex={activeIndex}
        swiperFunction={swiper}
        routes={routes}
      />

      <section className="slide-container">
        <AboutSlideContainer
          setActiveIndex={configureIndex}
          setSwiper={configureSwiper}
          props={props}
        />
      </section>
    </div>
  );
};

export default AboutScreen;

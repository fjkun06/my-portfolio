"use client";
import React from "react";

import { useMediaQuery } from "react-responsive";
import { Parallax, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import { SideNavigation } from "@/components";
import {
  SummaryScreen,
  EducationScreen,
  SkillsScreen,
  ExperienceScreen
} from "@/screens";

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

  //enabling or disabling mouselwheel scrolling
  const isLongEnough = useMediaQuery(
    {
      minHeight: 1080
    },
    undefined,
    handleMediaQueryChange
  );
  const isLargeEnough = useMediaQuery(
    {
      minHeight: 922,
      minWidth: 1300
    },
    undefined,
    handleMediaQueryChange
  );
  const [max1024, setAMouseWheel] = React.useState(isLongEnough || isLargeEnough);
  function handleMediaQueryChange(matches: boolean) {
    setAMouseWheel(matches);
  }

  const arr = [
    <SummaryScreen summary={summary} key={1} />,
    <EducationScreen interests={education.interests} school={education.school} key={2} />,
    <SkillsScreen key={3} softSkills={skills} />,
    <ExperienceScreen key={4} experience={experience} />
  ];
  return (
    <div className="portfolio-about">
      <SideNavigation
        currentIndex={activeIndex}
        swiperFunction={swiper}
        routes={routes}
      />
      <section className="slide-container">
        <Swiper
          direction={"vertical"}
          effect="pagination"
          speed={1000}
          slidesPerView={1}
          spaceBetween={0}
          simulateTouch={false}
          mousewheel={max1024}
          navigation={true}
          allowTouchMove={isLongEnough}
          pagination={{
            clickable: true
          }}
          modules={[Parallax, Mousewheel, Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => setSwiper(swiper as any)}
          onRealIndexChange={({ activeIndex }) => setActiveIndex(activeIndex)}
        >
          {arr.map((el, i) => (
            <SwiperSlide key={i}>{({ isActive }) => isActive && el}</SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default AboutScreen;

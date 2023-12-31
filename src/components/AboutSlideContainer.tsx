"use client";
import React from "react";

import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { Parallax, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SummaryScreen } from "@/screens";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

const EducationScreen = dynamic(() => import("@/screens/EducationScreen"), {
  ssr: true
});
const SkillsScreen = dynamic(() => import("@/screens/SkillsScreen"), {
  ssr: true
});
const ExperienceScreen = dynamic(() => import("@/screens/ExperienceScreen"), {
  ssr: true
});

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

const AboutSlideContainer = ({
  setSwiper,
  setActiveIndex,
  props
}: {
  setSwiper: (swipe: any) => void;
  setActiveIndex: (index: number) => void;
  props: any;
}) => {
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

  const { summary, education, skills, experience } = props;
  return (
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
      <SwiperSlide>
        <SummaryScreen summary={summary} />
      </SwiperSlide>
      <SwiperSlide>
        <EducationScreen interests={education.interests} school={education.school} />
      </SwiperSlide>
      <SwiperSlide>
        <SkillsScreen softSkills={skills} />
      </SwiperSlide>
      <SwiperSlide>
        <ExperienceScreen experience={experience} />
      </SwiperSlide>
    </Swiper>
  );
};

export default AboutSlideContainer;

"use client";
import React from "react";

import { useMediaQuery } from "react-responsive";
import { Parallax, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import { SideNavigation } from "@/components";

import SummaryScreen, { ISummary } from "./SummaryScreen";

interface IAboutScreen {
  data: {
    routes: string[];
    summary: ISummary["summary"];
  };
}
const AboutScreen: React.FC<IAboutScreen> = ({ data: { routes, summary } }) => {
  //sythax for calling using the Swiper instance in React TypScript
  const [swiper, setSwiper] = React.useState<Swiper>();

  // state that has the current active index,
  //which can be used to force re - rende other components
  const [activeIndex, setActiveIndex] = React.useState(0);

  //enabling or disabling mouselwheel scrolling
  const isDesktopOrLaptop = useMediaQuery(
    {
      minWidth: 1300
    },
    undefined,
    handleMediaQueryChange
  );
  const [max1024, setAMouseWheel] = React.useState(isDesktopOrLaptop);
  function handleMediaQueryChange(matches: boolean) {
    setAMouseWheel(matches);
    console.log(matches);
  }

  const arr = [0, 1, 2, 3];
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
          pagination={{
            clickable: true
          }}
          modules={[Parallax, Mousewheel, Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => setSwiper(swiper)}
          onRealIndexChange={({ activeIndex }) => setActiveIndex(activeIndex)}
        >
          {arr.map((el) => (
            <SwiperSlide key={el}>
              <SummaryScreen summary={summary} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default AboutScreen;

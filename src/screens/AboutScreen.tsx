/* eslint-disable max-len */
"use client";
import React from "react";

import { Parallax, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import { SideNavigation, Section } from "@/components";
import useMediaQuery from "@/utils/useMediaQuery";

import SummaryScreen from "./SummaryScreen";

// import required modules
const AboutScreen = ({ routes }: { routes: string[] }) => {
  //sythax for calling using the Swiper instance in React TypScript
  const [swiper, setSwiper] = React.useState<Swiper>();

  // state that has the current active index, which can be used to force re-rende other components
  const [activeIndex, setActiveIndex] = React.useState(0);

  const max1024 = useMediaQuery("(width < 1024px)");
  console.log(!max1024);

  const arr = [0, 1, 2, 3];
  return (
    <main className="portfolio-about">
      <SideNavigation
        currentIndex={activeIndex}
        swiperFunction={swiper}
        routes={routes}
      />
      <section>
        <Swiper
          direction={"vertical"}
          effect="pagination"
          speed={1000}
          slidesPerView={1}
          spaceBetween={0}
          grabCursor
          // simulateTouch={false}
          // allowTouchMove={false}
          mousewheel={false}
          // mousewheel={true}
          navigation={true}
          pagination={{
            clickable: true
          }}
          // modules={[Parallax, Pagination]}
          modules={[Parallax, Mousewheel, Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => setSwiper(swiper)}
          onRealIndexChange={({ activeIndex }) => setActiveIndex(activeIndex)}
        >
          {arr.map((el) => (
            <SwiperSlide key={el}>{({ isActive }) => <SummaryScreen />}</SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default AboutScreen;

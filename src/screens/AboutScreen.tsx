/* eslint-disable max-len */
"use client";
import React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Parallax, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import { SideNavigation } from "@/components";

// import required modules
const AboutScreen = () => {
  //sythax for calling using the Swiper instance in React TypScript
  const [swiper, setSwiper] = React.useState<Swiper>();

  // state that has the current active index, which can be used to force re-rende other components
  const [activeIndex, setActiveIndex] = React.useState(0);

  //function to determine if the current slide is ctive
  const isActive = (index: number) => activeIndex === index - 1;

  const arr = [0, 1, 2, 3];
  return (
    <main className="portfolio-about">
      <SideNavigation currentIndex={activeIndex} swiperFunction={swiper} />
      <section>
        <Swiper
          direction={"vertical"}
          effect="pagination"
          speed={1000}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          navigation={true}
          pagination={{
            clickable: true
          }}
          modules={[Parallax, Mousewheel, Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => setSwiper(swiper)}
          onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
        >
          {arr.map((el) => (
            <SwiperSlide key={el}>
              {({ isActive }) => <Section>{el}</Section>}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default AboutScreen;

function Section({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section ref={ref}>
      {/* <motion.span
        style={
          {
            // transitionTimingFunction: "cubic-bezier(0.17, 0.55, 0.55, 1)"
          }
        }
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: isInView ? 0 : "-200px",
          opacity: isInView ? 1 : 0,
          transition: {
            duration: 0.9,
            delay: 0.25,
            ease: "easeInOut"
          }
        }}
      > */}
      {children}
      {/* </motion.span> */}
      {/* <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span> */}
    </section>
  );
}

"use client";
import React from "react";

import { motion } from "framer-motion";
import { Parallax, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

// import required modules
const AboutScreen = () => {
  const arr = [0, 1, 2, 3, 4];
  return (
    <main className="portfolio-about">
      <aside>navigation</aside>
      <section>
        <Swiper
          direction={"vertical"}
          effect="pagination"
          speed={1000}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          pagination={{
            clickable: true
          }}
          modules={[Parallax, Mousewheel, Pagination]}
          className="mySwiper"
        >
          {arr.map((el) => (
            <SwiperSlide key={el}>
              {({ isActive }) => (
                <div>
                  {/* <div>Current slide is {isActive ? "active" : "not active"}</div> */}
                  <motion.span
                    transition={{ ease: "easeInOut", duration: 0.35 }}
                    layoutId="arrow"
                    className="arrow"
                  />
                  <p className="">
                    Values top The caption box should be positioned above the table.
                    bottom The caption box should be positioned below the table.
                    block-start The caption box should be positioned at the block start
                    edge of the table. block-end The caption box should be positioned at
                    the block end edge of the table. inline-start The caption box should
                    be positioned at the inline start edge of the table. inline-end The
                    caption box should be positioned at the inline end edge of the table.
                  </p>
                  <p className="">
                    Values top The caption box should be positioned above the table.
                    bottom The caption box should be positioned below the table.
                    block-start The caption box should be positioned at the block start
                    edge of the table. block-end The caption box should be positioned at
                    the block end edge of the table. inline-start The caption box should
                    be positioned at the inline start edge of the table. inline-end The
                    caption box should be positioned at the inline end edge of the table.
                  </p>
                  <p className="">
                    Values top The caption box should be positioned above the table.
                    bottom The caption box should be positioned below the table.
                    block-start The caption box should be positioned at the block start
                    edge of the table. block-end The caption box should be positioned at
                    the block end edge of the table. inline-start The caption box should
                    be positioned at the inline start edge of the table. inline-end The
                    caption box should be positioned at the inline end edge of the table.
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default AboutScreen;

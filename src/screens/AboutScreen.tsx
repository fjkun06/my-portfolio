"use client";
import React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Parallax, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

// import required modules
const AboutScreen = () => {
  //testing when slide is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: "some" });
  console.log(isInView);

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
          <SwiperSlide>
            <Section>Animate</Section>
          </SwiperSlide>
          <SwiperSlide>
            <Section>when</Section>
          </SwiperSlide>
          <SwiperSlide>
            <Section>
              <SubSection />
            </Section>
          </SwiperSlide>
          <SwiperSlide>
            <Section>view!</Section>
          </SwiperSlide>
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
      <motion.span
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
      >
        {children}
      </motion.span>
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
function SubSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <div ref={ref}>
      <motion.span
        style={
          {
            // transitionTimingFunction: "cubic-bezier(0.17, 0.55, 0.55, 1)"
          }
        }
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: isInView ? 0 : "-200px",
          opacity: isInView ? 1 : 0,
          transition: {
            duration: 0.9,
            delay: 1.75,
            ease: "easeInOut"
          }
        }}
      >
        Testing text
      </motion.span>
    </div>
  );
}

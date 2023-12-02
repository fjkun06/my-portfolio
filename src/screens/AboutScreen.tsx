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

// import required modules
const AboutScreen = () => {
  // const swiperParams: SwiperOptions = {
  //   speed: 400
  // };

  // const swiper = new SW(".swiper", swiperParams);

  const [swiper, setSwiper] = React.useState<Swiper>();

  // state that has the current active index, which can be used to force re-rende other components
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isActive = (index: number) => activeIndex === index - 1;
  console.log(activeIndex);

  const arr = [0, 1, 2, 3];
  return (
    <main className="portfolio-about">
      <aside>
        <span
          className={isActive(1) ? "active" : ""}
          onClick={() => swiper.slideTo(1, 1500)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="transparent"
          >
            <path d="M0 0h512v512H0z" fill="" fillOpacity="1" />
            <g transform="translate(0,0)">
              <path
                d="M324.582 17.393c-93.624 0-169.723 76.094-169.723 169.72 0 93.627 76.098 169.725 169.722 169.725 93.624 0 169.725-76.098 169.725-169.725 0-93.624-76.1-169.72-169.725-169.72zm0 18.69c83.523 0 151.033 67.507 151.033 151.03 0 83.525-67.51 151.033-151.033 151.033-83.523 0-151.03-67.508-151.03-151.033 0-83.525 67.507-151.03 151.03-151.03zM356.54 62.01c-4.802-.08-9.63.392-14.448 1.474-34.385 7.73-39.338 45.97.678 50.385 30.042 3.316 51.002 53.078 45.642 90.703-6.692 46.976 45.08 44.456 59.164-2.53 18.33-61.148-34.38-139.084-91.037-140.032zm-33.093 65.316l-15.857 42.883-31-5.303 22.71 27.352-21.933 26.414 29.07-4.97 17.01 46.005 17.008-45.992 29.375 5.023-21.988-26.48 22.765-27.418-31.306 5.353-15.853-42.866zm-297.633 67.56c-1.02.027-2.096.09-3.23.206h-.002v.002c-1.107.114-2.162.268-3.193.437v19.075c1.79-.417 3.474-.755 5.108-.923 1.993-.206 4.99.048 8.97.048 48.645 0 88.188 39.026 88.188 87.602S82.11 388.936 33.47 388.936c-4.908 0-9.516-.402-14.08-1.172v18.896c4.576.628 9.247.965 14.08.965 58.69 0 106.874-47.533 106.874-106.293 0-58.76-48.184-106.29-106.875-106.29-1.366 0-2.954-.105-4.767-.15-.906-.024-1.87-.034-2.89-.007zM49.8 238.282c-3.21-.066-6.43.286-9.618 1.11-18.975 4.897-24.602 31.424-2.22 32.938v-.004c17.73 1.2 23.966 21.076 22.374 41.6-1.972 25.428 34.927 23.09 41.713-2.442 8.68-32.663-21.24-72.554-52.25-73.2zm146.815 115.413c-37.322 0-67.78 30.457-67.78 67.78s30.458 67.78 67.78 67.78 67.78-30.457 67.78-67.78-30.458-67.78-67.78-67.78zm0 18.69c27.222 0 49.09 21.868 49.09 49.09 0 27.222-21.868 49.09-49.09 49.09-27.222 0-49.09-21.868-49.09-49.09 0-27.223 21.868-49.09 49.09-49.09zm3.627 17.55c-1.13 0-2.265.104-3.402.323-10.146 1.957-13.307 13.24-2.44 17.844 6.05 2.562 13.452 9.213 10.127 23.478-3.156 13.546 17.432 13.867 21.98.225 6.02-18.053-9.33-41.855-26.265-41.87z"
                fill="currentColor"
                fillOpacity="1"
              />
            </g>
          </svg>
          Summary
        </span>
        <span
          className={isActive(2) ? "active" : ""}
          onClick={() => swiper.slideTo(1, 1500)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 0h512v512H0z" fill="transparent" fillOpacity="1" />
            <g transform="translate(0,0)">
              <path
                d="M256 89.61L22.486 177.18 256 293.937l111.22-55.61-104.337-31.9A16 16 0
                 0 1 256 208a16 16 0 0 1-16-16 16 16 0 0 1 16-16l-2.646 8.602 18.537 
                 5.703a16 16 0 0 1 .008.056l27.354 8.365L455 246.645v12.146a16 16 0 0 0-7
                  13.21 16 16 0 0 0 7.293 13.406C448.01 312.932 448 375.383 448 400c16
                   10.395 16 10.775 32 0 0-24.614-.008-87.053-7.29-114.584A16 16 0 0 0 
                   480 272a16 16 0 0 0-7-13.227v-25.42L413.676 215.1l75.838-37.92L256
                    89.61zM119.623 249L106.5 327.74c26.175 3.423 57.486 18.637 86.27 
                    36.627 16.37 10.232 31.703 21.463 44.156 32.36 7.612 6.66 13.977 13.05
    19.074 19.337 5.097-6.288 11.462-12.677 19.074-19.337 12.453-10.897
27.785-22.128 44.156-32.36 28.784-17.99 60.095-33.204 86.27-36.627L392.375
                       249h-6.25L256 314.063 125.873 249h-6.25z"
                fill="currentColor"
                fillOpacity="1"
              />
            </g>
          </svg>
          Education &amp;&amp; Interests
        </span>
        <span
          className={isActive(3) ? "active" : ""}
          onClick={() => swiper.slideTo(2, 1500)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 0h512v512H0z" fill="transparent" fillOpacity="1" />
            <g transform="translate(0,0)">
              <path
                d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84
                 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 
74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z"
                fill="currentColor"
                fillOpacity="1"
              />
            </g>
          </svg>
          Soft &amp;&amp; Hard Skills
        </span>
        <span
          className={isActive(4) ? "active" : ""}
          onClick={() => swiper.slideTo(3, 1500)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 0h512v512H0z" fill="transparent" fillOpacity="1" />
            <g transform="translate(0,0)">
              <path
                d="M256 29.816l-231 154v106.368l231-154 231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925 151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58 87 58v-67.6zm0 89.957l-87 58v64.368l87-58 87 58v-64.368z"
                fill="currentColor"
                fillOpacity="1"
              />
            </g>
          </svg>
          Professional Experience
        </span>
      </aside>
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
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
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

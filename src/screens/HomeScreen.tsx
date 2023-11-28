"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { CodeSnippet } from "@/components";

import { codeSnippets, sampleCode } from "./data";

const HomeScreen = () => {
  const [arr, setArr] = useState<number[]>([0, 1, 2, 3, 4]);
  const delay = 7000; // 7 seconds
  let lastTime = 0;
  useEffect(() => {
    //increment the index of each element in the array so as
    //to create a circular rotation of the array elements
    const animate = (currentTime: number): void => {
      if (currentTime - lastTime >= delay) {
        setArr((prevArr) =>
          prevArr.map((_, index, array) => {
            const newIndex = (index - 1 + array.length) % array.length;
            return array[newIndex];
          })
        );

        lastTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <motion.main className="portfolio-home">
      <div className="portfolio-home--left">
        <motion.div className="" animate={{ y: [50, -50, 0], opacity: [0, 1] }}>
          <span className="">Hi all, I am</span>
          <span className="title">Frank Jordan Z.</span>
          <h3 className="">&gt; Front-end Developer</h3>
        </motion.div>
        <motion.div
          animate={{ y: [50, -50, 0], opacity: [0, 1] }}
          transition={{ delay: 0.25, type: "spring" }}
        >
          <CodeSnippet snippet={sampleCode} />
        </motion.div>
      </div>
      <div className="portfolio-home--right">
        {arr.map((el) => (
          <div key={el}>
            <CodeSnippet
              snippet={codeSnippets[el].snippet}
              language={codeSnippets[el].language}
            />
          </div>
        ))}
      </div>
    </motion.main>
  );
};

export default HomeScreen;

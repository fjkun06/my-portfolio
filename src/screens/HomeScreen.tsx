"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { CodeSnippet } from "@/components";

import { codeSnippets } from "./data";
const HomeScreen = () => {
  const [arr, setArr] = useState<number[]>([0, 1, 2, 3, 4]);
  const delay = 7000; // 3 seconds
  let lastTime = 0;
  useEffect(() => {
    const animate = (currentTime: number): void => {
      if (currentTime - lastTime >= delay) {
        setArr((prevArr) =>
          prevArr.map((element, index, array) => {
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
        <motion.pre
          className="flex flex-col"
          animate={{ y: [50, -50, 0], opacity: [0, 1] }}
          transition={{ delay: 0.25, type: "spring" }}
        >
          <code className="">&#47;&#47; complete the game to continue</code>
          <code className="">&#47;&#47; you can also see it on my Github page</code>
          <code className="">
            <span className="">const &nbsp;</span>
            <span className="">githubLink</span>
            <span className=""> &nbsp;= &nbsp;</span>
            <span className="">“https://github.com/example/url”</span>
          </code>
          <CodeSnippet
            snippet={`// complete the game to continue
// you can also see it on my Github page
const  githubLink  =  “https://github.com/example/url”`}
          />
        </motion.pre>
      </div>
      <div className="portfolio-home--right">
        {arr.map((el) => (
          <CodeSnippet
            key={el}
            snippet={codeSnippets[el].snippet}
            language={codeSnippets[el].language}
          />
        ))}
      </div>
    </motion.main>
  );
};

export default HomeScreen;

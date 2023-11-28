"use client";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { CodeSnippet } from "@/components";

import { codeSnippets, codeSnippets2 } from "./data";
const HomeScreen = () => {
  // const increaseIndexCircularly = (arr: any) => {
  //   let i = 0;
  //   while (i < 15) {
  //     arr = arr.map((element: any, index: any, array: any) => {
  //       const newIndex = (index + 1) % array.length;
  //       return array[newIndex];
  //     });
  //     console.log(arr);
  //     i++;
  //   }
  // };

  const [arr, setArr] = useState<number[]>([0, 1, 2, 3, 4]);
  const delay = 7000; // 3 seconds
  let lastTime = 0;

  // useEffect(() => {
  //   const animate = (currentTime: number): void => {
  //     if (currentTime - lastTime >= delay) {
  //       setArr((prevArr) =>
  //         prevArr.map((element, index, array) => {
  //           const newIndex = (index + 1) % array.length;
  //           return array[newIndex];
  //         })
  //       );

  //       lastTime = currentTime;
  //     }

  //     requestAnimationFrame(animate);
  //   };

  //   requestAnimationFrame(animate);
  // }, []);
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
        <motion.div
          className=""
          // initial={{ y: 100, opacity: 0 }}
          animate={{ y: [50, -50, 0], opacity: [0, 1] }}
          // transition={{ delay: 1 }}
        >
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
        </motion.pre>
      </div>
      <div className="portfolio-home--right">
        {/* <h1 className="text-[50px]">Frank Jordan Zone&apos;s Portfolio right</h1> */}
        {codeSnippets2
          // .filter((x) => x < 2)
          .map((props) => (
            <CodeSnippet key={props.language} {...props} />
            // <CodeSnippet key={language} snippet={snippet} language={language} />
          ))}
        {/* {arr
          // .filter((x) => x < 2)
          .map((el) => (
            <CodeSnippet key={el} snippet={codeSnippets[el]} />
          ))} */}
      </div>
    </motion.main>
  );
};

export default HomeScreen;

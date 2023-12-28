"use client";

import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import { codeSnippets } from "../screens/data";

const CodeSnippet = dynamic(() => import("@/components/CodeSnippet"), {
  ssr: true
});

const CodeReel = () => {
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
        lastTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);
  return (
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
  );
};

export default CodeReel;

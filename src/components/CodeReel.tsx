/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState, useRef } from "react";

import dynamic from "next/dynamic";

import { codeSnippets } from "../screens/data";

const CodeSnippet = dynamic(() => import("@/components/CodeSnippet"), {
  ssr: false
});

const CodeReel = () => {
  const [arr, setArr] = useState<number[]>([0, 1, 2, 3, 4]);
  const delay = 7000; // 7 seconds
  const lastTimeRef = useRef<number>(0);
  useEffect(() => {
    //increment the index of each element in the array so as
    //to create a circular rotation of the array elements
    const animate = (currentTime: number): void => {
      if (currentTime - lastTimeRef.current >= delay) {
        setArr((prevArr) => {
          let updatedArr = [...prevArr]; // Create a new array to avoid mutations
          updatedArr = updatedArr.map((_, index, array) => {
            const newIndex = (index - 1 + array.length) % array.length;
            return array[newIndex];
          });
          return updatedArr;
        });

        lastTimeRef.current = currentTime;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [delay]);

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

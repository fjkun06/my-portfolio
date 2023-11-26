"use client";
import React from "react";

import { motion } from "framer-motion";
const HomeScreen = () => {
  return (
    <motion.main className="portfolio-home">
      <div className="portfolio-home--left">
        <div className="">
          <span className="">Hi all, I am</span>
          <span className="title">Frank Jordan Z.</span>
          <h3 className="">&gt; Front-end Developer</h3>
        </div>
        <pre className="flex flex-col">
          <code className="">&#47;&#47; complete the game to continue</code>
          <code className="">&#47;&#47; you can also see it on my Github page</code>
          <code className="">
            <span className="">const &nbsp;</span>
            <span className="">githubLink</span>
            <span className=""> &nbsp;= &nbsp;</span>
            <span className="">“https://github.com/example/url”</span>
          </code>
        </pre>
      </div>
      <div className="portfolio-home--right">
        <h1 className="text-[50px]">Frank Jordan Zone&apos;s Portfolio right</h1>
      </div>
    </motion.main>
  );
};

export default HomeScreen;

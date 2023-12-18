"use client";

import React from "react";

import { motion } from "framer-motion";

import { Button, CodeSnippet } from "@/components";

import { sampleCode } from "../screens/data";

const UserInfo = ({
  greeting,
  role,
  callToActions
}: {
  callToActions: string[][];
  greeting: string;
  role: string;
}) => {
  return (
    <div className="portfolio-home--left">
      <motion.div className="" animate={{ y: [50, -50, 0], opacity: [0, 1] }}>
        <span className="">{greeting}</span>
        <span className="title">Frank Jordan Z.</span>
        <h3 className="">
          <mark> &gt; {role}</mark>
        </h3>
        <div className="cta">
          {callToActions.map(([text, route], i) => (
            <Button text={text} route={route} key={i} />
          ))}
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [50, -50, 0], opacity: [0, 1] }}
        transition={{ delay: 0.25, type: "spring" }}
      >
        <CodeSnippet snippet={sampleCode} />
      </motion.div>
    </div>
  );
};

export default UserInfo;

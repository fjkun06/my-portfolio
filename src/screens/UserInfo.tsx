"use client";

import React from "react";

import { motion } from "framer-motion";

import { CodeSnippet } from "@/components";

import { sampleCode } from "./data";

const UserInfo = ({ greeting, role }: { greeting: string; role: string }) => {
  return (
    <div className="portfolio-home--left">
      <motion.div className="" animate={{ y: [50, -50, 0], opacity: [0, 1] }}>
        <span className="">{greeting}</span>
        <span className="title">Frank Jordan Z.</span>
        <h3 className="">&gt; {role}</h3>
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

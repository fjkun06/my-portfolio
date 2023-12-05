"use client";
import React from "react";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

import { Button } from "@/components";

import { logoData } from "./data";
export interface ISummary {
  summary: string[];
}
const SummaryScreen = ({ summary }: ISummary) => {
  const [link, setCurrentLink] = React.useState({
    url: "https://github.com/fjkun06",
    title: "Github"
  });

  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  console.log(isInView);

  return (
    <section ref={ref} className="about-summary">
      <header>
        <div className="header-left">
          <motion.h2
            animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
          >
            {summary[0]}
          </motion.h2>

          <motion.p
            animate={{ y: isInView ? [50, -50, 0] : 0, opacity: isInView ? [0, 1] : 0 }}
            transition={{ delay: 0.25, type: "spring" }}
          >
            {summary.slice(1, 3).map((t, i) => (
              <span key={i} className="">
                {t}
              </span>
            ))}
            <br />
            <span dangerouslySetInnerHTML={{ __html: summary[3] }} />
            <br />
            <Button text={summary[4]} route="/contact" />
          </motion.p>
        </div>
        <div className="header-right" />
      </header>
      <div className="summary-carousel logos">
        {[0, 1].map((x) => (
          <div key={x} className="logos-slide">
            {logoData.map((logo, i) => (
              <Image
                key={i}
                src={`/assets/icons/icon${i + 1}.svg`}
                alt="logo"
                height={100}
                width={100}
                className="myLogo"
                onMouseEnter={() => setCurrentLink(logo)}
              />
            ))}
          </div>
        ))}
        <Tooltip anchorSelect=".myLogo" place="bottom" variant="light" clickable>
          <Link href={link.url} target="_blank" passHref={true}>
            <span>{link.title}</span>
          </Link>
        </Tooltip>
      </div>
    </section>
  );
};

export default SummaryScreen;

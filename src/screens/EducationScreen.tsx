"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

import { Button, Section } from "@/components";
import { useRouter } from "@/components/Link";

import { logoData } from "./data";
export interface ISummary {
  summary: string[];
}
const EducationScreen = ({ summary }: ISummary) => {
  const router = useRouter();
  const [link, setCurrentLink] = React.useState({
    url: "https://github.com/fjkun06",
    title: "Github"
  });

  return (
    <Section className="about-summary">
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
      <header>
        <div className="header-left">
          <motion.h2 animate={{ y: [50, -50, 0], opacity: [0, 1] }}>
            {summary[0]}
          </motion.h2>

          <motion.p
            animate={{ y: [50, -50, 0], opacity: [0, 1] }}
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
    </Section>
  );
};

export default EducationScreen;

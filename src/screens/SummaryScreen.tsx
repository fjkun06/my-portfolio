"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

import { Section } from "@/components";

import { logoData } from "./data";

const SummaryScreen = () => {
  const arr = Array(17).fill(17);
  const [link, setCurrentLink] = React.useState({
    url: "https://github.com/fjkun06",
    title: "Github"
  });

  const testx = {
    url: "https://github.com/testx",
    title: "Testing"
  };

  return (
    <Section className="about-summary">
      <header className="">
        <div className="header-left">
          <h2>So, who am I?</h2>
          <p className="">
            <span>I'm a Front-end Developer from Cameroon.</span>
            <span>
              I enjoy breathing life into complex and beautiful Web Designs. I equally
              love the logic and structure of coding and always thrive to write elegant
              and efficient code, irrespective of the programming language.
            </span>
            <br />
            <span>
              From writing my first C code in 2018, to my latest Github commit the
              excitement of solving problems via programming just keeps growing
              exponentially.
            </span>
            <span>
              The <button className="">Projects</button> section showcases my most recent
              projects.
            </span>
            <br />
            <button className="contact-me">Contact me</button>
          </p>
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
                // onMouseLeave={() => setCurrentLink("false")}
                // data-tooltip-content={<div>Hello world! Im a Tooltip</div>}
              />
            ))}
          </div>
        ))}
        <Tooltip anchorSelect=".myLogo" place="bottom" variant="light" clickable>
          <Link href={link.url} target="_blank" passHref={true}>
            <span className="">{link.title}</span>
          </Link>
        </Tooltip>
      </div>
    </Section>
  );
};

export default SummaryScreen;

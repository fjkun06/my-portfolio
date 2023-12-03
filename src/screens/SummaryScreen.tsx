import React from "react";

import Image from "next/image";

import { Section } from "@/components";

const SummaryScreen = () => {
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
        <div className="header-right">
          <Image
            src="/images/franko.png"
            alt="a picture of Frank Jordan"
            width={460}
            height={460}
            priority
          />
        </div>
      </header>
      <div className="summary-carousel">Carousel Section</div>
    </Section>
  );
};

export default SummaryScreen;

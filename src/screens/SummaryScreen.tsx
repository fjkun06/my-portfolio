"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

import { Section } from "@/components";
import { useRouter } from "@/components/Link";

import { logoData } from "./data";
export interface ISummary {
  summary: string[];
}
const SummaryScreen = ({ summary }: ISummary) => {
  const router = useRouter();
  const [link, setCurrentLink] = React.useState({
    url: "https://github.com/fjkun06",
    title: "Github"
  });

  return (
    <Section className="about-summary">
      <header>
        <div className="header-left">
          <h2>{summary[0]}</h2>

          <p>
            {summary.slice(1, 3).map((t, i) => (
              <span key={i} className="">
                {t}
              </span>
            ))}
            <br />
            <span dangerouslySetInnerHTML={{ __html: summary[3] }} />
            <br />
            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="contact-me"
            >
              {summary[4]}
            </button>
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
    </Section>
  );
};

export default SummaryScreen;

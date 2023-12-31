"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

import { logoData } from "@/screens/data";

const AboutCarousel = () => {
  const [link, setCurrentLink] = React.useState({
    url: "https://github.com/fjkun06",
    title: "Github"
  });
  return (
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
  );
};

export default AboutCarousel;

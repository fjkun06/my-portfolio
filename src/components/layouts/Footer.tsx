import React from "react";

import Link from "next/link";

import { footerItems } from "@/components/data";
import { GithubIcon } from "@/components/icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-media">
        <span className="find-me">find me in: </span>
        {footerItems.map(({ icon, href }) => (
          <Link href={href} target="_blank" passHref={true} key={href}>
            {icon}
          </Link>
        ))}
      </div>
      <div className="footer-github">
        <Link href="https://github.com/fjkun06" target="_blank" passHref={true}>
          <span className="">@fjkun06</span>
          <GithubIcon />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

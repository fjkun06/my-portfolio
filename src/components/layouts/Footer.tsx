import React from "react";

import { GithubIcon, LinkedInIcon, TwitterIcon, XingIcon } from "@/components/icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-media">
        <span className="">Find me in: </span>
        <LinkedInIcon />
        <XingIcon />
        <TwitterIcon />
      </div>
      <div className="footer-github">
        <span className="">@username</span>
        <GithubIcon />
      </div>
    </footer>
  );
};

export default Footer;

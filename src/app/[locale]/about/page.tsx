import React from "react";

import { useTranslations } from "next-intl";

import { sideNavigationDate } from "@/components/data";
import { AboutScreen } from "@/screens";

const About = () => {
  const t = useTranslations("about");
  const sideNavigationRoutes = sideNavigationDate.map(({ text }) => t(text));

  return <AboutScreen routes={sideNavigationRoutes} />;
};

export default About;

import React from "react";

import { useTranslations } from "next-intl";

import { sideNavigationDate } from "@/components/data";
import { AboutScreen } from "@/screens";
import { summaryKeys } from "@/screens/data";

const About = () => {
  const t = useTranslations("about");
  const sideNavigationRoutes = sideNavigationDate.map(({ text }) => t(`${text}.title`));
  const summaryData = summaryKeys.map((text) => t(`summary.${text}`));

  summaryData[3] = t.markup("summary.desc2", {
    important: (chunks) => `<button class="summary-btn">${chunks}</button>`
  });

  // console.log(test);

  //translation data for summary section of about page
  const translationData = {
    routes: sideNavigationRoutes,
    summary: summaryData
  };

  return <AboutScreen data={translationData} />;
};

export default About;

import React from "react";

import { useTranslations } from "next-intl";

import { sideNavigationDate } from "@/components/data";
import { AboutScreen } from "@/screens";
import { summaryKeys } from "@/screens/data";
import { IEducation, List } from "@/screens/EducationScreen";

const About = () => {
  const t = useTranslations("about");
  const sideNavigationRoutes = sideNavigationDate.map(({ text }) => t(`${text}.title`));

  // Summary screen data
  const summaryData = summaryKeys.map((text) => t(`summary.${text}`));
  summaryData[3] = t.markup("summary.desc2", {
    important: (chunks) => `<button class="summary-btn">${chunks}</button>`
  });

  // Education screen data
  const interests = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
  const educationData: IEducation = {
    school: {
      title: t("education.schools.title"),
      data: ["ub", "ude"].map((text) => {
        return {
          name: t(`education.schools.${text}.name`),
          endDate: t(`education.schools.${text}.endDate`),
          grade: t(`education.schools.${text}.grade`),
          field: t(`education.schools.${text}.field`)
        };
      })
    },
    interests: {
      title: t("education.interests.title"),
      data: interests.map((el) => t(`education.interests.list.${el}`))
    }
  };

  //Skills screen data
  const skillsData: List = {
    title: t("skills.soft.title"),
    data: interests.map((el) => t(`skills.soft.list.${el}`))
  };

  //translation data for summary section of about page
  const translationData = {
    routes: sideNavigationRoutes,
    summary: summaryData,
    education: educationData,
    skills: skillsData
  };

  return <AboutScreen data={translationData} />;
};

export default About;

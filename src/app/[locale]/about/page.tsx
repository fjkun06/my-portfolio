import React from "react";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

import { sideNavigationDate } from "@/components/data";
import { summaryKeys } from "@/screens/data";
import { IEducation, List } from "@/screens/EducationScreen";
import { IExperienceData } from "@/screens/ExperienceScreen";
const AboutScreen = dynamic(() => import("@/screens/AboutScreen"), {
  ssr: true
});

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
    subtitle: t("skills.subtitle"),
    data: interests.map((el) => t(`skills.soft.list.${el}`))
  };

  // Experience screen data
  const experienceData: IExperienceData = {
    title: t("experience.title"),
    xp1: t("experience.xp1"),
    xp2: t("experience.xp2"),
    date1: t("experience.date1"),
    date2: t("experience.date2"),
    data: interests.slice(0, 5).map((el) => t(`experience.list.${el}`))
  };

  //translation data for summary section of about page
  const translationData = {
    routes: sideNavigationRoutes,
    summary: summaryData,
    education: educationData,
    skills: skillsData,
    experience: experienceData
  };

  return <AboutScreen data={translationData} />;
};

export default About;

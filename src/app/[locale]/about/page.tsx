import React from "react";

import { useTranslations } from "next-intl";

import SwitchLanguage from "../SwitchLanguage";

const About = () => {
  const t = useTranslations("index");

  return (
    <div>
      About Page {t("title")}
      #
      <SwitchLanguage />
    </div>
  );
};

export default About;

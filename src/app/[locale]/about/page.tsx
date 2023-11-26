import React from "react";

import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("index");

  return <>About Page {t("title")}#</>;
};

export default About;

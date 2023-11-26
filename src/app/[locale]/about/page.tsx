import React from "react";

import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("index");

  return <div>About Page {t("title")}#</div>;
};

export default About;

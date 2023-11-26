import React from "react";

import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("index");

  return <div>Projects Page {t("title")}#</div>;
};

export default Projects;

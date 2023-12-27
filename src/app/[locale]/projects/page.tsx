import React from "react";

import { useTranslations } from "next-intl";

import { ProjectsScreen } from "@/screens";

const Projects = () => {
  const t = useTranslations("projects");
  const projectTranslations = {
    title: t("heading"),
    descriptions: Array(4)
      .fill(4)
      .map((_, i) => t(`description${i + 1}`))
  };

  return <ProjectsScreen {...projectTranslations} />;
};

export default Projects;

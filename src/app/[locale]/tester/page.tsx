import React from "react";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const ProjectsScreen = dynamic(() => import("@/screens/ProjectsScreen"), {
  ssr: true
});

const Tester = () => {
  const t = useTranslations("projects");
  const projectTranslations = {
    title: t("heading"),
    descriptions: Array(4)
      .fill(4)
      .map((_, i) => t(`description${i + 1}`))
  };
  console.log(projectTranslations);
  return <ProjectsScreen {...projectTranslations} />;
};

export default Tester;

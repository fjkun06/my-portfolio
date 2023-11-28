import React from "react";

import { useTranslations } from "next-intl";

import CodeReel from "./CodeReel";
import UserInfo from "./UserInfo";

const HomeScreen = () => {
  const t = useTranslations("home");

  return (
    <main className="portfolio-home">
      <UserInfo role={t("role")} greeting={t("greeting")} />
      <CodeReel />
    </main>
  );
};

export default HomeScreen;

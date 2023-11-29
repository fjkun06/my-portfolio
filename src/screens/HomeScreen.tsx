import React from "react";

import { useTranslations } from "next-intl";

import { CodeReel, UserInfo } from "@/components";

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

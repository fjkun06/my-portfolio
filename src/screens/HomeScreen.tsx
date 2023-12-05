import React from "react";

import { useTranslations } from "next-intl";

import { CodeReel, UserInfo } from "@/components";
import { routes } from "@/utils/data";

const HomeScreen = () => {
  const t = useTranslations("home");
  const t2 = useTranslations("routes");
  const callToActions = routes
    .map((el) => [t2(`${el}.text`), t2(`${el}.href`)])
    .filter((_, i) => i > 0 && i !== 2);
  return (
    <div className="portfolio-home">
      <UserInfo role={t("role")} greeting={t("greeting")} callToActions={callToActions} />
      <CodeReel />
    </div>
  );
};

export default HomeScreen;

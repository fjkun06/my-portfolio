import React from "react";

import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("index");

  return <div>Contact Page {t("title")}#</div>;
};

export default Contact;

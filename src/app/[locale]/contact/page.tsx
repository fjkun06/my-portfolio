import React from "react";

import { useTranslations } from "next-intl";

import { ContactScreen } from "@/screens";

const Contact = () => {
  const t = useTranslations("index");

  return <ContactScreen />;
};

export default Contact;

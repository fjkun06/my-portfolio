import React from "react";

import { useTranslations } from "next-intl";

import { ContactScreen } from "@/screens";
import { contactItems } from "@/screens/data";

const Contact = () => {
  const t = useTranslations("contact");

  const data: any = {};

  //looping through key array to get translations
  contactItems.forEach((el) => (data[`${el}`] = t(el)));

  return <ContactScreen {...data} />;
};

export default Contact;

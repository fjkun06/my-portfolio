import React from "react";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const ContactScreen = dynamic(() => import("@/screens/ContactScreen"), {
  ssr: true
});
import { contactItems } from "@/screens/data";

const Contact = () => {
  const t = useTranslations("contact");

  const data: any = {};

  //looping through key array to get translations
  contactItems.forEach((el) => (data[`${el}`] = t(el)));

  return <ContactScreen {...data} />;
};

export default Contact;

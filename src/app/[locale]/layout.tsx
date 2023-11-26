/* eslint-disable max-len */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "./globals.css";
import "@/styles/main.scss";
import "@/utils/fonts";
import { useTranslations } from "next-intl";

import { NavBar } from "@/components";
import { locales, routes } from "@/utils/data";

export const metadata: Metadata = {
  title: "Frank Jordan Portfolio",
  description:
    "Frank Jordan Zone's portfolio website for all his projects, details about his personal and educational background and how to contact him."
};

// Can be imported from a shared config
interface ILocaleLayout {
  params: {
    locale: string;
  };
  children: React.ReactNode;
}
export default function LocaleLayout({ children, params: { locale } }: ILocaleLayout) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  //loading translation files
  const t = useTranslations("routes");
  //fetch text and href data from language files
  const navbarRoutes = routes.map((el) => [t(`${el}.text`), t(`${el}.href`)]);

  return (
    <html lang={locale}>
      <body>
        <NavBar items={navbarRoutes} />
        {children}
      </body>
    </html>
  );
}

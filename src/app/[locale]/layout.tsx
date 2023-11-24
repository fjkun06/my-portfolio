/* eslint-disable max-len */
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import "./globals.css";
import "@/styles/main.scss";
import "@/utils/fonts";
import { NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Frank Jordan Portfolio",
  description:
    "Frank Jordan Zone's portfolio website for all his projects, details about his personal and educational background and how to contact him."
};

// Can be imported from a shared config
const locales = ["en", "de"];
interface ILocaleLayout {
  params: {
    locale: string;
  };
  children: React.ReactNode;
}
export default function LocaleLayout({ children, params: { locale } }: ILocaleLayout) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

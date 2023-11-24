import type { Metadata } from "next";

import { PageWrapper } from "@/components";
/* eslint-disable max-len */

export const metadata: Metadata = {
  title: "Frank Jordan Portfolio",
  description:
    "Frank Jordan Zone's portfolio website for all his projects, details about his personal and educational background and how to contact him."
};

// Can be imported from a shared config
interface ILocaleLayout {
  children: React.ReactNode;
}
export default function LocaleLayout({ children }: ILocaleLayout) {
  // Validate that the incoming `locale` parameter is valid

  return <PageWrapper>{children}</PageWrapper>;
}

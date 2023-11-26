import type { Metadata } from "next";

import { PageWrapper } from "@/components";
/* eslint-disable max-len */

export const metadata: Metadata = {
  title: "Frank Jordan | Contact",
  description: "Frank Jordan Zone's contact page. It shows how to get to Frank Jordan"
};

interface ILocaleLayout {
  children: React.ReactNode;
}
export default function LocaleLayout({ children }: ILocaleLayout) {
  // Validate that the incoming `locale` parameter is valid

  return <PageWrapper>{children}</PageWrapper>;
}

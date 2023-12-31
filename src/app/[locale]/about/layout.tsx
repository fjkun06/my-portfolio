import type { Metadata } from "next";

import { PageWrapper } from "@/components";
/* eslint-disable max-len */

export const metadata: Metadata = {
  title: "Frank Jordan | About",
  description: "Frank Jordan Zone's about page. It shows details about Frank Jordan"
};

interface ILocaleLayout {
  children: React.ReactNode;
}
export default function LocaleLayout({ children }: ILocaleLayout) {
  // Validate that the incoming `locale` parameter is valid

  return <PageWrapper>{children}</PageWrapper>;
}

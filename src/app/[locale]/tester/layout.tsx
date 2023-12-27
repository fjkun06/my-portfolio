import { Metadata } from "next";

import { PageWrapper } from "@/components";
/* eslint-disable max-len */

export const metadata: Metadata = {
  title: "Frank Jordan | Projects",
  description:
    "Frank Jordan Zone's projects page. It shows all projects created by Frank Jordan"
};

interface ILocaleLayout {
  children: React.ReactNode;
}

export default function LocaleLayout({ children }: ILocaleLayout) {
  return <PageWrapper>{children}</PageWrapper>;
}

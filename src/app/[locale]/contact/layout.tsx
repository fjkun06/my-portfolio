import type { Metadata } from "next";
import dynamic from "next/dynamic";

/* eslint-disable max-len */
const PageWrapper = dynamic(() => import("@/components/layouts/PageWrapper"), {
  ssr: true
});

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

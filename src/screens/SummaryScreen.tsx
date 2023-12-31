import React from "react";

import dynamic from "next/dynamic";

import { AboutHeader } from "@/components";
const AboutCarousel = dynamic(() => import("@/components/AboutCarousel"));

export interface ISummary {
  summary: string[];
}
const SummaryScreen = ({ summary }: ISummary) => {
  return (
    <section className="about-summary">
      <AboutHeader summary={summary} />
      <AboutCarousel />
    </section>
  );
};

export default SummaryScreen;

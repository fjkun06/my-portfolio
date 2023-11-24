"use client";

import { ComponentProps } from "react";

import { useSelectedLayoutSegment } from "next/navigation";

import { Link } from "./LanguageSwitcher";

export default function NavigationLink({ href, ...rest }: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={isActive ? "navbar-link navbar-link--active " : "navbar-link"}
      {...rest}
    />
  );
}

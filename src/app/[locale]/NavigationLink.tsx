"use client";

import { ComponentProps } from "react";

import { motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";

import { Link } from "./LanguageSwitcher";

interface INavigationLink extends ComponentProps<typeof Link> {
  callback: () => void;
}

export default function NavigationLink({
  href,
  children,
  callback,
  ...rest
}: INavigationLink) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={isActive ? "navbar-link navbar-link--active " : "navbar-link"}
      {...rest}
      onClick={callback}
    >
      {isActive && (
        <motion.span
          transition={{ ease: "easeInOut", duration: 0.35 }}
          layoutId="underline"
          className="underline"
        />
      )}
      {children}
    </Link>
  );
}

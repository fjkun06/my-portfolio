"use client";

import { ComponentProps } from "react";

import { motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";

import { Link } from "./Link";

interface INavigationLink extends ComponentProps<typeof Link> {
  callback?: () => void;
  //boolean property to disable navigation styling on navbar language items
  isALanguageSwitcher?: boolean;
}

export default function NavigationLink({
  href,
  children,
  isALanguageSwitcher = false,
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
      className={
        isActive && !isALanguageSwitcher
          ? "navbar-link navbar-link--active "
          : "navbar-link"
      }
      {...rest}
      onClick={callback}
    >
      {isActive && !isALanguageSwitcher && (
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

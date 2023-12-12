"use client";
import React from "react";

import { useRouter } from "@/components/Link";

const Button = ({
  text,
  route,
  className
}: {
  text: string;
  route?: string;
  className?: string;
}) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className={className}
      onClick={() => route && router.push(route)}
    >
      {text}
    </button>
  );
};

export default Button;

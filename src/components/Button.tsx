"use client";
import React from "react";

import { useRouter } from "@/components/Link";

const Button = ({ text, route }: { text: string; route?: string }) => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => route && router.push(route)}>
      {text}
    </button>
  );
};

export default Button;

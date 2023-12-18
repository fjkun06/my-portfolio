"use client";
import React from "react";

import { useRouter } from "@/components/Link";
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  route?: string;
}
const Button: React.FC<IButton> = ({ text, route, ...rest }) => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => route && router.push(route)} {...rest}>
      {text}
    </button>
  );
};

export default Button;

"use client";

import React from "react";

interface ILabelContainer extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  text: string;
}

const LabelContainer: React.FC<ILabelContainer> = ({ children, text, ...props }) => {
  return (
    <label {...props} htmlFor={text}>
      <span>{`_${text}:`}</span>
      {children}
    </label>
  );
};

export default LabelContainer;

import React from "react";
//taking the input type and returning props based on it
type InputComponentProps<T extends "input" | "textarea"> = T extends "input"
  ? React.InputHTMLAttributes<HTMLInputElement> & { inputType: "input" }
  : React.TextareaHTMLAttributes<HTMLTextAreaElement> & { inputType: "textarea" };

const InputComponent: React.FC<InputComponentProps<"input" | "textarea">> = (props) => {
  const { inputType, ...rest } = props;

  if (inputType === "input") {
    const inputProps = rest as React.InputHTMLAttributes<HTMLInputElement>;
    return <input type="text" {...inputProps} />;
  } else {
    const textAreaProps = rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    return <textarea {...textAreaProps} />;
  }
};

export default InputComponent;

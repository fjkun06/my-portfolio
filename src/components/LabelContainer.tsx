import React from "react";

import InputComponent from "./InputComponent";
interface ILabelContainer extends React.LabelHTMLAttributes<HTMLLabelElement> {}
const LabelContainer: React.FC<ILabelContainer> = ({ ...props }) => {
  return (
    <label {...props}>
      <span>_age:</span>
      <InputComponent inputType="input" type="text" name="" id="age" />
    </label>
  );
};

export default LabelContainer;

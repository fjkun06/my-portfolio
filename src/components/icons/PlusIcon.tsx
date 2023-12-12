import React from "react";
interface IPlusIcon extends React.HTMLAttributes<HTMLSpanElement> {}
const PlusIcon: React.FC<IPlusIcon> = ({ ...rest }) => {
  return (
    <span {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          fill="currentColor"
          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 
          13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
        />
      </svg>
    </span>
  );
};

export default PlusIcon;

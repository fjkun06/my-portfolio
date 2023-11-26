import React from "react";
export interface Icon {
  callback?: () => void;
}
const GermanyIcon: React.FC<Icon> = () => {
  return (
    <span className="nav-flag">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3">
        <path d="M0 0h5v3H0z" />
        <path fill="#D00" d="M0 1h5v2H0z" />
        <path fill="#FFCE00" d="M0 2h5v1H0z" />
      </svg>
    </span>
  );
};

export default GermanyIcon;

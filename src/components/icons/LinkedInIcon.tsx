import React from "react";
export interface Icon {
  callback?: () => void;
}
const LinkedInIcon: React.FC<Icon> = ({ callback }) => {
  return (
    <span onClick={callback}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001
             10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568
              10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098
              6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255
              3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098
               5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export default LinkedInIcon;

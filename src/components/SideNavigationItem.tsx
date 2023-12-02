import React from "react";

interface ISideNavigationItem {
  text: string;
  index: number;
  icon: React.JSX.Element;
  swiperFunction: any;
  currentIndex: number;
}
const SideNavigationItem: React.FC<ISideNavigationItem> = ({
  text,
  index,
  icon,
  swiperFunction,
  currentIndex
}) => {
  //function to determine if the current slide is ctive
  const isActive = (index: number) => currentIndex === index - 1;

  return (
    <span
      className={isActive(index) ? "active" : ""}
      onClick={() => swiperFunction.slideTo(index - 1, 1500)}
    >
      {icon}
      {text}
    </span>
  );
};

export default SideNavigationItem;

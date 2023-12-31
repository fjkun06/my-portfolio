interface ISideNavigationItem extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  index: number;
  icon: React.JSX.Element;
  swiperFunction: any;
  currentIndex: number;
  callback: () => void;
}
const SideNavigationItem: React.FC<ISideNavigationItem> = ({
  text,
  index,
  icon,
  swiperFunction,
  currentIndex,
  callback,
  ...rest
}) => {
  //function to determine if the current slide is ctive
  const isActive = (index: number) => currentIndex === index - 1;

  return (
    <span
      {...rest}
      className={isActive(index) ? "active" : ""}
      onClick={() => {
        swiperFunction.slideTo(index - 1, 1500);
        callback();
      }}
    >
      {icon}
      {text}
    </span>
  );
};

export default SideNavigationItem;

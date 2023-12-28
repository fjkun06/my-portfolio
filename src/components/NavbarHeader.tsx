import { FrankJordanIcon, MenuIcon } from "./icons";

interface INavbarHeader {
  isOpen: boolean;
  toggleOpen: () => void;
}

const NavbarHeader = ({ isOpen, toggleOpen }: INavbarHeader) => {
  return (
    <div className="nav-toggle">
      <div className={`nav-toggle--link ${isOpen ? "underlined" : ""}`}>
        <span className="">
          <FrankJordanIcon />
          <span className=""> frank jordan zoné</span>
        </span>
        <MenuIcon isOpen={isOpen} callback={toggleOpen} />
      </div>
    </div>
  );
};

export default NavbarHeader;

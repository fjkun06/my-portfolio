import { FrankJordanIcon, MenuIcon } from "./icons";

interface INavbarHeader {
  isOpen: boolean;
  toggleOpen: () => void;
  name: string;
}

const NavbarHeader = ({ isOpen, toggleOpen, name }: INavbarHeader) => {
  return (
    <div className="nav-toggle">
      <div className={`nav-toggle--link ${isOpen ? "underlined" : ""}`}>
        <span className="">
          <FrankJordanIcon />
          {name && <span className=""> {name}</span>}
        </span>
        <MenuIcon isOpen={isOpen} callback={toggleOpen} />
      </div>
    </div>
  );
};

export default NavbarHeader;

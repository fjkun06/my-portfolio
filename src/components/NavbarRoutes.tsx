import dynamic from "next/dynamic";

import { NavigationLink } from "@/components";

const NavbarGroup = dynamic(() => import("@/components/NavbarGroup"), {
  ssr: false
});

interface INavbarRoutes {
  items: string[][];
  closeMenu: () => void;
}

const NavbarRoutes = ({ items, closeMenu }: INavbarRoutes) => {
  return (
    <NavbarGroup>
      {items.length &&
        items.slice(0, 3).map(([text, href], index) => (
          <NavigationLink key={index} callback={closeMenu} href={href}>
            {text}
          </NavigationLink>
        ))}
    </NavbarGroup>
  );
};

export default NavbarRoutes;

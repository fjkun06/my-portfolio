import dynamic from "next/dynamic";

import { NavigationLink } from "@/components";
import { locales } from "@/utils/data";

const NavbarGroup = dynamic(() => import("@/components/NavbarGroup"), {
  ssr: false
});
const SwitchLanguage = dynamic(() => import("@/components/SwitchLanguage"), {
  ssr: false
});

interface INavbarContactLanguage {
  contact: string[];
  closeMenu: () => void;
}

const NavbarContactLanguage = ({ contact, closeMenu }: INavbarContactLanguage) => {
  return (
    <NavbarGroup className="nav-links-group">
      <div className="nav-links-group--language">
        {locales.map((locale) => (
          <SwitchLanguage key={locale} language={locale as any} text={`_${locale}`} />
        ))}
      </div>

      <NavigationLink callback={closeMenu} href={contact[1]}>
        {contact[0]}
      </NavigationLink>
    </NavbarGroup>
  );
};

export default NavbarContactLanguage;

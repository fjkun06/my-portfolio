import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { locales } from "@/utils/data";

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(
  {
    locales
  }
);
export default Link;

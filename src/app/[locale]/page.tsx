import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

import { routes } from "@/utils/data";

const HomeScreen = dynamic(() => import("@/screens/HomeScreen"), {
  ssr: true
});

export default function Home() {
  const t = useTranslations("home");
  const t2 = useTranslations("routes");
  const callToActions = routes
    .map((el) => [t2(`${el}.text`), t2(`${el}.href`)])
    .filter((_, i) => i > 0 && i !== 2);

  return (
    <HomeScreen role={t("role")} greeting={t("greeting")} callToActions={callToActions} />
  );
}

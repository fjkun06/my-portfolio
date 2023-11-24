import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "./LanguageSwitcher";
import SwitchLanguage from "./SwitchLanguage";

export default function Home() {
  const t = useTranslations("index");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="z-10 max-w-5xl w-full items-center 
      justify-between font-mono text-sm lg:flex"
      >
        <p
          className="fixed left-0 top-0 flex w-full justify-center border-b
         border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl
          dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static
           lg:w-auto  lg:rounded-xl lg:border 
           lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Get started by qqqqqqqediting&nbsp; {t("title")}
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <Link href="/" locale="de">
          Switch to German
        </Link>
        <SwitchLanguage />
      </div>
      <div className="">
        <h1 className="text-[50px]">Frank Jordan Zone&apos;s Portfolio</h1>
      </div>
      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}

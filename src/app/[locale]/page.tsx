import { PageWrapper } from "@/components";

export default function Home() {
  return (
    <PageWrapper>
      <main className="portfolio-home">
        <div className="portfolio-home--left">
          <h1 className="text-[50px]">Frank Jordan Zone&apos;s Portfolio Left</h1>
        </div>
        <div className="portfolio-home--right">
          <h1 className="text-[50px]">Frank Jordan Zone&apos;s Portfolio right</h1>
        </div>
      </main>
    </PageWrapper>
  );
}

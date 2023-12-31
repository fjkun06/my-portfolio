/* eslint-disable max-len */
import dynamic from "next/dynamic";

const CodeReel = dynamic(() => import("@/components/CodeReel"), {
  ssr: false
});
const UserInfo = dynamic(() => import("@/components/UserInfo"), {
  ssr: true
});

const HomeScreen = (props: {
  role: string;
  greeting: string;
  callToActions: string[][];
}) => {
  return (
    <main>
      <div className="portfolio-home">
        <UserInfo {...props} />
        <CodeReel />
      </div>
    </main>
  );
};

export default HomeScreen;

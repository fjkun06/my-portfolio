import dynamic from "next/dynamic";

const CodeSnippet = dynamic(() => import("@/components/CodeSnippet"), {
  ssr: true
});
const HomeCTA = dynamic(() => import("@/components/HomeCTA"), {
  ssr: true
});

import { sampleCode } from "../screens/data";

const UserInfo = ({
  greeting,
  role,
  callToActions
}: {
  callToActions: string[][];
  greeting: string;
  role: string;
}) => {
  return (
    <div className="portfolio-home--left">
      <div className="">
        <span className="">{greeting}</span>
        <span className="title">Frank Jordan Z.</span>
        <h3 className="">
          <mark> &gt; {role}</mark>
        </h3>
      </div>
      <HomeCTA callToActions={callToActions} />
      <div>
        <CodeSnippet snippet={sampleCode} />
      </div>
    </div>
  );
};

export default UserInfo;

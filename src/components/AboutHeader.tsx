import React from "react";

import Button from "./Button";

const AboutHeader = ({ summary }: { summary: string[] }) => {
  return (
    <header>
      <div className="header-left">
        {summary[0] && <h2>{summary[0]}</h2>}

        <p>
          {summary.slice(1, 3).map(
            (t, i) =>
              t && (
                <span key={i} className="">
                  {t}
                </span>
              )
          )}
          <br />
          {summary[3] && <span dangerouslySetInnerHTML={{ __html: summary[3] }} />}
          <br />
          <Button text={summary[4]} route="/contact" />
        </p>
      </div>
      <div className="header-right" />
    </header>
  );
};

export default AboutHeader;

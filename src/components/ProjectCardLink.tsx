"use client";
import React from "react";

import Link from "next/link";
import { Tooltip } from "react-tooltip";

const ProjectCardLink = ({
  href,
  icon,
  cls,
  text
}: {
  href: string;
  icon: string;
  cls: string;
  text: string;
}) => {
  return (
    <span key={cls}>
      {href && (
        <Link href={href as string} target="_blank" passHref={true} className={cls}>
          {icon}
        </Link>
      )}

      <Tooltip anchorSelect={`.${cls}`} place="top" variant="light">
        <span>{text}</span>
      </Tooltip>
    </span>
  );
};

export default ProjectCardLink;

import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
interface ICodeSnippet {
  snippet: string;
  language?: string;
  className?: string;
}
const CodeSnippet: React.FC<ICodeSnippet> = ({ snippet, language, className }) => {
  return (
    <SyntaxHighlighter
      language={language ?? "javascript"}
      style={vscDarkPlus}
      className={className}
    >
      {snippet}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;

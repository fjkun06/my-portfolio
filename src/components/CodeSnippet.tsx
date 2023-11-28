import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
interface ICodeSnippet {
  snippet: string;
  language?: string;
}
const CodeSnippet: React.FC<ICodeSnippet> = ({ snippet, language }) => {
  return (
    <div>
      <SyntaxHighlighter language={language ?? "javascript"} style={vscDarkPlus}>
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;

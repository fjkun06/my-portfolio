import React from "react";

import dynamic from "next/dynamic";

import { today } from "@/screens/data";

const CodeSnippet = dynamic(() => import("@/components/CodeSnippet"), {
  ssr: true
});
interface IContactOutputCard {
  output: string;
  _name: string;
  _message: string;
  _email: string;
  success: boolean;
  _gone: boolean;
}
const ContactOutputCard: React.FC<IContactOutputCard> = ({
  success,
  output,
  _name,
  _email,
  _message,
  _gone = false
}) => {
  return (
    <>
      {!_gone && (
        <div className={` ${success ? "fadeout" : "output-data"}`}>
          <h2> {output}</h2>
          <CodeSnippet
            snippet={`
const button = document.querySelector('.sendBtn');

const message = {
	name: "${_name}",
	email: "${_email}",
	message: "${_message}",
	date: "${today} ${success}"
}

button.addEventListener('click', () => {
	form.send(message);
})`}
          />
        </div>
      )}
    </>
  );
};

export default ContactOutputCard;

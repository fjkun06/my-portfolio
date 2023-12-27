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
}
const ContactOutputCard: React.FC<IContactOutputCard> = ({
  success,
  output,
  _name,
  _email,
  _message
}) => {
  return (
    <div
      // animate={{
      //   y: [10, -10, 0],
      //   opacity: [0, 1],
      //   transition: { delay: 1, duration: 0.5 }
      // }}
      // exit={{ y: 50, opacity: 0, transition: { delay: 0.1 } }}
      // transition={{ type: "spring", ease: "easeInOut" }}
      className={"output-data "}
    >
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
  );
};

export default ContactOutputCard;

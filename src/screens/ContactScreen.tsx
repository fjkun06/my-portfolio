/* eslint-disable max-len */
"use client";
import React from "react";

import { Button, CodeSnippet, InputComponent, LabelContainer } from "@/components";

import { today } from "./data";

const ContactScreen = () => {
  //state hooks for updating fields
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const onEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const onNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const onMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  const inputs = [
    {
      type: "input",
      value: name,
      onChange: onNameChange,
      text: "name"
    },
    {
      type: "input",
      value: email,
      onChange: onEmailChange,
      text: "email"
    },
    {
      type: "textarea",
      value: message,
      onChange: onMessageChange,
      text: "message"
    }
  ];

  return (
    <div className="portfolio-contact">
      <h1>Get in touch</h1>
      <section>
        <div className="input-data">
          <h2> Input Data</h2>
          <LabelContainer text="name">
            <InputComponent
              inputType="input"
              id="name"
              onChange={onNameChange}
              value={name}
            />
          </LabelContainer>
          <LabelContainer text="email">
            <InputComponent
              inputType="input"
              id="email"
              onChange={onEmailChange}
              value={email}
            />
          </LabelContainer>
          <LabelContainer text="message">
            <InputComponent
              inputType="textarea"
              id="message"
              onChange={onMessageChange}
              value={message}
            />
          </LabelContainer>
          <Button text="submit-message" className="sendBtn" />
        </div>
        <div className="output-data">
          <h2> Output Data</h2>
          <CodeSnippet
            snippet={`
const button = document.querySelector('.sendBtn');

const message = {
	name: "${name}",
	email: "${email}",
	message: "${message}",
	date: "${today}"
}

button.addEventListener('click', () => {
	form.send(message);
})`}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;

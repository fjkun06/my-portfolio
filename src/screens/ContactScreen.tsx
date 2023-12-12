/* eslint-disable max-len */
"use client";
import React, { useId } from "react";

import { useForm, ValidationError } from "@formspree/react";

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

  //form submission state
  const [state, handleSubmit] = useForm("xqkvropo");

  const inputs = [
    {
      type: "input",
      value: name,
      onChange: onNameChange,
      text: "name",
      name: "name"
    },
    {
      type: "input",
      value: email,
      onChange: onEmailChange,
      text: "email",
      name: "email"
    },
    {
      type: "textarea",
      value: message,
      onChange: onMessageChange,
      text: "message",
      name: "message"
    }
  ];

  //return this if successful
  console.log(state);
  
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="portfolio-contact">
      <h1>Get in touch</h1>
      <section>
        <form className="input-data" onSubmit={handleSubmit}>
          <h2> Input Data</h2>
          {inputs.map(({ type, value, onChange, text, name }) => (
            <LabelContainer text={text} key={text}>
              <InputComponent
                inputType={type as any}
                id={text}
                onChange={onChange as any}
                value={value}
                name={name}
              />
              <ValidationError
                prefix={name.toUpperCase()}
                field={name}
                errors={state.errors}
              />
            </LabelContainer>
          ))}
          <Button
            text="submit-message"
            className="sendBtn"
            type="submit"
            disabled={state.submitting}
          />
        </form>
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

        <div className="success"></div>
      </section>
    </div>
  );
};

export default ContactScreen;

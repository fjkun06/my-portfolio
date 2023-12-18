/* eslint-disable max-len */
"use client";
import React from "react";

import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "framer-motion";

import { Button, CodeSnippet, InputComponent, LabelContainer } from "@/components";

import { today } from "./data";
export interface IContactScreen {
  heading: string;
  input: string;
  output: string;
  name: string;
  email: string;
  message: string;
  button: string;
  thanks: string;
  tmessage: string;
  redirect: string;
}

const ContactScreen: React.FC<IContactScreen> = ({
  heading,
  input,
  output,
  name,
  email,
  message,
  button,
  thanks,
  tmessage,
  redirect
}) => {
  //state hooks for updating fields
  const [_name, setName] = React.useState("");
  const [_email, setEmail] = React.useState("");
  const [_message, setMessage] = React.useState("");
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
      value: _name,
      onChange: onNameChange,
      text: name,
      name: "name"
    },
    {
      type: "input",
      value: _email,
      onChange: onEmailChange,
      text: email,
      name: "email"
    },
    {
      type: "textarea",
      value: _message,
      onChange: onMessageChange,
      text: message,
      name: "message"
    }
  ];

  return (
    <div className="portfolio-contact">
      <h1>{heading}</h1>
      <motion.section layout>
        <AnimatePresence>
          {!state.succeeded && (
            <motion.form
              layout
              className="input-data"
              onSubmit={handleSubmit}
              animate={{
                y: [10, -10, 0],
                opacity: [0, 1],
                transition: { delay: 0.5, duration: 0.5 }
              }}
              exit={{ y: 50, opacity: 0, transition: { delay: 0.1 } }}
              transition={{ type: "spring", ease: "easeInOut" }}
            >
              <h2> {input}</h2>
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
                text={button}
                className="sendBtn"
                type="submit"
                disabled={state.submitting}
              />
            </motion.form>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!state.succeeded && (
            <motion.div
              layout
              className="output-data"
              animate={{
                y: [10, -10, 0],
                opacity: [0, 1],
                transition: { delay: 1, duration: 0.5 }
              }}
              exit={{ y: 50, opacity: 0, transition: { delay: 0.1 } }}
              transition={{ type: "spring", ease: "easeInOut" }}
            >
              <h2> {output}</h2>
              <CodeSnippet
                snippet={`
const button = document.querySelector('.sendBtn');

const message = {
	name: "${_name}",
	email: "${_email}",
	message: "${_message}",
	date: "${today}"
}

button.addEventListener('click', () => {
	form.send(message);
})`}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {state.succeeded && (
            <motion.div
              layout
              className="success"
              animate={{ y: [50, -50, 0], opacity: [0, 1], transition: { delay: 0.75 } }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", ease: "easeInOut" }}
            >
              <h3 className="">{thanks}</h3>
              <br />
              <span>{tmessage}</span>
              <br />
              <span>{redirect}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
};

export default ContactScreen;

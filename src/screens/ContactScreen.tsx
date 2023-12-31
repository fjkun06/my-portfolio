"use client";
import React from "react";

import { useForm } from "@formspree/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ContactThankYouCard = dynamic(() => import("@/components/ContactThankYouCard"), {
  ssr: true
});
const ContactOutputCard = dynamic(() => import("@/components/ContactOutputCard"), {
  ssr: false
});
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: true
});

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
  const [_gone, setGone] = React.useState(false);
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

  //redirect to homepage after successful form submission
  const { push } = useRouter();
  const delay = 5;
  React.useEffect(() => {
    const timer = setTimeout(() => {
      state.succeeded && push("/");
    }, delay * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [state.succeeded, push]);
  React.useEffect(() => {
    const timer = setTimeout(() => state.succeeded && setGone(true), delay * 100);
    return () => {
      clearTimeout(timer);
    };
  }, [state.succeeded, push]);

  //grouping props per component
  const thankYou = { thanks, tmessage, redirect, success: state.succeeded, _gone };
  const outputCardProps = {
    success: state.succeeded,
    output,
    _name,
    _email,
    _message,
    _gone
  };
  const inputCardProps = {
    input,
    inputs,
    state,
    handleSubmit,
    button,
    _gone
  };

  return (
    <div className="portfolio-contact">
      <h1>{heading}</h1>
      <section>
        <ContactForm {...inputCardProps} />
        <ContactOutputCard {...outputCardProps} />
        <ContactThankYouCard {...thankYou} />
      </section>
    </div>
  );
};

export default ContactScreen;

import React from "react";

import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/Button"), {
  ssr: true
});
const InputComponent = dynamic(() => import("@/components/InputComponent"), {
  ssr: true
});
const LabelContainer = dynamic(() => import("@/components/LabelContainer"), {
  ssr: true
});

interface IContactForm {
  input: string;
  inputs: (
    | {
        type: string;
        value: string;
        onChange: React.ChangeEventHandler<HTMLInputElement>;
        text: string;
        name: string;
      }
    | {
        type: string;
        value: string;
        onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
        text: string;
        name: string;
      }
  )[];
  state: {
    errors: any;
    submitting: boolean;
    succeeded: boolean;
  };
  handleSubmit: any;
  button: string;
  _gone: boolean;
}
const ContactForm: React.FC<IContactForm> = ({
  input,
  inputs,
  state,
  handleSubmit,
  button,
  _gone
}) => {
  return (
    <>
      {!_gone && (
        <form
          className={` ${state.succeeded ? "fadeout" : "input-data"}`}
          onSubmit={handleSubmit}
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
              <span className="">{state.errors}</span>
            </LabelContainer>
          ))}
          <Button
            text={button}
            className="sendBtn"
            type="submit"
            disabled={state.submitting}
          />
        </form>
      )}
    </>
  );
};

export default ContactForm;

/* eslint-disable max-len */
import React from "react";

import { Button, CodeSnippet, InputComponent, LabelContainer } from "@/components";

const ContactScreen = () => {
  return (
    <div className="portfolio-contact">
      <h1>Get in touch</h1>
      <section>
        <div className="input-data">
          Input Data
          <label htmlFor="name">
            <span>_name:</span>
            <InputComponent inputType="input" type="text" name="" id="name" />
          </label>
          <LabelContainer />
          <label htmlFor="email">
            <span>_email:</span>
            <input type="text" name="" id="email" />
          </label>
          <label htmlFor="message">
            <span>_message:</span>
            <textarea name="" id="message" rows={6} cols={28} />
          </label>
          <Button text="submit-message" className="sendBtn" />
        </div>
        <div className="output-data">
          Ouput Data
          <CodeSnippet
            snippet={`
const button = document.querySelector('.sendBtn');

const message = {
	name: "Jonathan Davis",
	email: "jonathan-davis@gmail.com",
	message: "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks!",
	date: "Thu 21 Apr"
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

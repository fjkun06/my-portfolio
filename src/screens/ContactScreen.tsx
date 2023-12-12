import React from "react";

import { Button } from "@/components";

const ContactScreen = () => {
  return (
    <div className="portfolio-contact">
      <h1>Get in touch</h1>
      <section>
        <div className="input-data">
          Input Data
          <label htmlFor="name">
            <span>_name:</span>
            <input type="text" name="" id="name" />
          </label>
          <label htmlFor="email">
            <span>_email:</span>
            <input type="text" name="" id="email" />
          </label>
          <label htmlFor="name">
            <span>_message:</span>
            <textarea name="" id="message" rows={6} cols={28} />
          </label>
          <Button text="submit-message" />
        </div>
        <div className="output-data">Ouput Data</div>
      </section>
    </div>
  );
};

export default ContactScreen;

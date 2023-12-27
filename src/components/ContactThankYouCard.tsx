import React from "react";

interface IContactThankYouCard {
  thanks: string;
  tmessage: string;
  redirect: string;
  success: boolean;
  _gone: boolean;
}
const ContactThankYouCard: React.FC<IContactThankYouCard> = ({
  thanks,
  tmessage,
  redirect,
  success,
  _gone
}) => {
  return (
    <>
      {_gone && (
        <div
          className={success ? "success" : "pending"}
          style={{ display: _gone ? "" : "none" }}
        >
          <h3 className="">{thanks}</h3>
          <br />
          <span>{tmessage}</span>
          <br />
          <span>{redirect}</span>
        </div>
      )}
    </>
  );
};

export default ContactThankYouCard;

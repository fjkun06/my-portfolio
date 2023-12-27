import React from "react";

interface IContactThankYouCard {
  thanks: string;
  tmessage: string;
  redirect: string;
  success: boolean;
}
const ContactThankYouCard: React.FC<IContactThankYouCard> = ({
  thanks,
  tmessage,
  redirect,
  success
}) => {
  return (
    <div
      className={"success" + success ? "success" : ""}
      // animate={{ y: [50, -50, 0], opacity: [0, 1], transition: { delay: 0.75 } }}
      // exit={{ y: 50, opacity: 0 }}
      // transition={{ type: "spring", ease: "easeInOut" }}
    >
      <h3 className="">{thanks}</h3>
      <br />
      <span>{tmessage}</span>
      <br />
      <span>{redirect}</span>
    </div>
  );
};

export default ContactThankYouCard;

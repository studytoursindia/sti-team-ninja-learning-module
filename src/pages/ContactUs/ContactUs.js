import React from "react";

const ContactUs = (props) => {
  return (
    <div>
      Contact Us
      <p>{props.location.pathname}</p>
    </div>
  );
};

export default ContactUs;

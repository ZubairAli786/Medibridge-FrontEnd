import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactUsheader">
        <h1>Who We Are</h1>
      </div>
      <div className="contactUsbody">
        <p style={{ fontSize: "1.2em", paddingLeft: "240px" }}>
          Medibridge is one of the best service which helps peoples in saving
          the lifes in serious conditions
        </p>
      </div>
      <div className="contactlinks">
        <div className="service">
          <h2 style={{ padding: "20px" }}>About our Service</h2>
          <p style={{ fontSize: "1.2em", padding: "20px" }}>
            Medibridge is one of the best service which helps peoples in saving
            the lifes in serious conditions. In the Medibridge webpage there is
            the information of all types and categories diseases.It is the
            service provide the information about initiate treatment for any
            disease. Normal Peoples can know what will thy can do in the
            emergency cases.
          </p>
        </div>
        <div className="call">
          <h2 style={{ padding: "20px" }}>Call Medibridge</h2>
        </div>
        <div className="email">
          <h2 style={{ padding: "20px" }}>Email Medibridge</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

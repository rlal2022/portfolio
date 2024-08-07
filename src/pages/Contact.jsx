import React from "react";
import Socials from "../components/Socials";
import ContactForm from "../components/ContactForm";
import "../css/App.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2 className="contact-title">Contact Me</h2>
        <ContactForm />
        <Socials />
      </div>
    </>
  );
};

export default Contact;

import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./contactInfoCard/ContactInfoCard";
import ContactForm from "./contactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/whitEmail22-removebg-preview.png"
            text="MuhuammadAtique444@gmail.com"
          />

          <ContactInfoCard
            iconUrl="./assets/images/white-github-removebg-preview.png"
            text="Atique98"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

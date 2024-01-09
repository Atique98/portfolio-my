import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_4ier7wp', 'template_lq3uhao', form.current, 'BBW6TgO_KN3xWJX9g')
      .then(
        (result) => {
          console.log(result.text);
          setSubmitMessage('Email sent successfully!');
          form.current.reset()
          setTimeout(() => setSubmitMessage(''), 3000);
          
        },
        (error) => {
          console.log(error.text);
          setSubmitMessage('Failed to send email. Please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="from_name" placeholder="Name" required />
        </div>
        <input type="email" name="from_email" placeholder="Email" required />
        <textarea type="text" name="message" placeholder="Message" rows={3} required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'SEND'}
        </button>
        <div className="submit-message">{submitMessage}</div>
      </form>
    </div>
  );
};

export default ContactForm;

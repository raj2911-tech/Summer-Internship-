import React from 'react';
import '../Css/Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
import React from 'react';
import '../css/contact.css';

function Contact() {
  return (
    <div className="wrapper">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

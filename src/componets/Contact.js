import React from 'react';

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;
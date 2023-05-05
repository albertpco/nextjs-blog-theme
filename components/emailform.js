import React from 'react';

const EmailForm = () => {
  return (
    <div>
      <h2>Email Sign-up</h2>
      <p>if you want early access shoot us your e-mail</p>
      <form name="email-submission" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="email-submission" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <button type="submit">sign up for limited release</button>
      </form>
    </div>
  );
};

export default EmailForm;

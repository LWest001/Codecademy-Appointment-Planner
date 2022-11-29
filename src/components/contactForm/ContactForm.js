import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name:</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Firstname Lastname"
        value={name}
      />
      <label htmlFor="phone">Enter your phone number:</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        maxLength="10"
        minLength="10"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="(123) 456-7890"
        value={phone}
        pattern="^\d+$"
      />
      <label htmlFor="email">Enter your email address:</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@address.com"
        value={email}
      />
      <input type="submit" />
    </form>
  );
};

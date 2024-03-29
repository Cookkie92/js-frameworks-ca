import React, { useState } from "react";
import {
  ContactContainer,
  ContactTitle,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
} from "../styles/ContactStyle";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const { fullName, subject, email, body } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          Full Name:
          <FormInput
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            required
            minLength={3}
          />
        </FormLabel>
        <FormLabel>
          Subject:
          <FormInput
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
            required
            minLength={3}
          />
        </FormLabel>
        <FormLabel>
          Email:
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </FormLabel>
        <FormLabel>
          Body:
          <FormTextarea
            name="body"
            value={body}
            onChange={handleChange}
            required
            minLength={3}
          ></FormTextarea>
        </FormLabel>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </ContactContainer>
  );
};

export default ContactPage;

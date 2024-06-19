import React, { useState, useEffect } from 'react';
import './FormValidation.css';

const FormValidation: React.FC = () => {
  // State definitions to manage the input values of the form
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Effect to validate the form whenever any of the inputs change
  useEffect(() => {
    validateForm();
  }, [name, email, contact, password]);

  // Function to validate the form
  const validateForm = () => {
    const isNameValid = name.trim() !== '';
    const isEmailValid = email.includes('@');
    const isContactValid = /^\d{10}$/.test(contact);
    const isPasswordValid = password.length >= 8;

    setIsFormValid(isNameValid && isEmailValid && isContactValid && isPasswordValid);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h1>Task 3</h1>
      <h3>Form Validation</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Contact"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      {submitted && (
        <div className="form-values">
          <h3>Submitted Values:</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Contact: {contact}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
};

export default FormValidation;

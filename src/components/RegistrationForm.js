import React, { useState } from "react";
import usersData from "../data/users.json";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    // Save new user to users.json (Simulated here)
    usersData.push(newUser);
    setMessage("Registration successful! You can now log in.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RegistrationForm;

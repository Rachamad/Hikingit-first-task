import React, { useState } from "react";
import usersData from "../data/users.json";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = usersData.find(
      (u) => u.email === formData.email && u.password === formData.password
    );
    if (user) {
      onLogin(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;

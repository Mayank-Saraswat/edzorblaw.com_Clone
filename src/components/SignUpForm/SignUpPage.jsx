import React, { useState } from "react";
import "./SignUpForm.css";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and submit the form data
    if (name && email && phone && password) {
      alert(
        `Form submitted! \n Name: ${name}, Email: ${email}, Phone No: ${phone}`
      );
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
    } else {
      // Display an error or validation message
      alert("Please fill in all fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ textAlign: "center" }}>Login Form</h1>
      <div className="container">
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <br />
          <input
            type="number"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import closebutton from "../../assets/Frame 1261155540.png";
import alertbt from "../../assets/Frame.jpg";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);

  const handleNavigate = () => {
    navigate("/");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsValidName(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
      return;
    }
    if (name.trim() === "") {
      setIsValidName(false);
      return;
    }
    console.log("Valid name:", name);
    console.log("Valid email:", email);
    navigate("/finalpage");
  };

  return (
    <div className="registration-container">
      <div>
        <img
          className="logo-container"
          src="https://cdn.worldvectorlogo.com/logos/brunel.svg"
          alt="logo"
        />
        <img
          className="close-button"
          src={closebutton}
          alt="closebutton"
          onClick={handleNavigate}
        />
      </div>
      <h2>Registration Form</h2>
      <p className="description">Start your success Journey here!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={`form-group ${isValidName ? "" : "invalid"}`}
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          {!isValidName && (
            <p className="error-message">
              <img src={alertbt} alt="alertbt" />
              Please enter your name
            </p>
          )}
        </div>
        <div>
          <input
            className={`form-group ${isValidEmail ? "" : "invalid"}`}
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isValidEmail && (
            <p className="error-message">
              <img src={alertbt} alt="alertbt" />
              Enter a valid email address
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`submit-button ${
            isValidEmail && isValidName ? "" : "disabled"
          }`}
          disabled={!isValidEmail || !isValidName}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;

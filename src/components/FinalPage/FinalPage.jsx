import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FinalPage.css";
import Ticksym from "../../assets/Tick + round.png";

const FinalPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  return (
    <div className="registration-container">
      <div>
        <img
          className="logo-container"
          src="https://cdn.worldvectorlogo.com/logos/brunel.svg"
          alt="logo"
        />
      </div>
      <div>
        <img className="tick-sym" src={Ticksym} alt="ticksym" />
        <p className="submitted-container">Success Submitted</p>
        <p className="text">Congratulations</p>
        <p className="text2">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>
      <div className="redirecting-container">
        Redirecting you to Homepage in <div className="countdown">{countdown} Seconds</div>
      </div>
    </div>
  );
};

export default FinalPage;

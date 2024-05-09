import React, { useState } from "react";
import "./MainPage.css";
import spark from "../../assets/spark, sparkle, 26.png";
import rocket from "../../assets/Group 1171281573.png";
import nextArrow from "../../assets/Frame.png";
import vector from "../../assets/Union.png";
import Carousel from "../carousel/carousel";
import Csymbol from "../../assets/Frame - Copy.png"
import rectangleAni from "../../assets/background.png"
const MainPage = () => {
  const [CodeDropDown, setCodeDropDown] = useState({
    StaticQ1: false,
    StaticQ2: false,
    StaticQ3: false,
    StaticQ4: false,
    StaticQ5: false,
  });

  const handleCodeDropDown = (language) => {
    setCodeDropDown((prevState) => ({
      ...prevState,
      [language]: !prevState[language],
    }));
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            src="https://cdn.worldvectorlogo.com/logos/brunel.svg"
            alt="logo"
          />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item-1">
            <button
              onClick={() => {
                window.location.href = "/option1";
              }}
            >
              Get Projects
            </button>
          </li>
          <li className="navbar-item-2">
            <button
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              Onboard Talents
            </button>
          </li>
        </ul>
      </nav>

      <main className="content">
        <h1>success stories</h1>
        <p>Every success journey we’ve encountered</p>
      </main>
      <div className="image" />
      <div className="overlap-content1">
        <div>
          <img className="sparkle" src={spark} alt="sparkle" />
        </div>
        <p
          style={{
            fontFamily: "Switzer, sans-serif",
            fontSize: "64px",
            fontWeight: "700",
            letterSpacing: "-0.03em",
            textAlign: "left",
            marginBottom: "-3rem",
            marginTop: "-2rem",
            color: "#000",
          }}
        >
          40%
        </p>
        <p>
          Achieved reduction in project execution time by optimising team
          availability
        </p>
      </div>
      <div className="overlap-content2">
        <img className="rocket-img" src={rocket} alt="rocket" />
        <p>10 DAYS</p>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "20.8px",
            textAlign: "left",
            width: "131px",
            height: "21px",
            gap: "0px",
            opacity: "0px",
            color: "#828282",
            marginTop: "-1rem",
          }}
        >
          Staff Deployment
        </p>
      </div>
      <div className="overlap-content3">
        <p
          style={{
            fontSize: "52.37px",
            fontWeight: "500",
            lineHeight: "76.05px",
            letterSpacing: "-0.03em",
            textAlign: "left",
            marginBottom: "-4rem",
            width: "119px",
            height: "76px",
            color: "#FFFFFF",
            marginTop: "-1rem",
          }}
        >
          $0.5
        </p>
        <p
          style={{
            fontFamily: "Switzer",
            fontSize: "22.81px",
            fontWeight: "500",
            lineHeight: "31.94px",
            letterSpacing: "0.01em",
            textAlign: "left",
            marginLeft: "7rem",
            width: "91px",
            height: "32px",
            marginTop: "1.7rem",
            color: "#A6A3A0",
          }}
        >
          MILLION
        </p>
        <p>Reduced client expenses by saving on hiring and employee costs.</p>
      </div>
      <div className="carousel-content">
        <div style={{ marginLeft: "64rem" }}>
          <img className="squareeff-img" src={rectangleAni} alt="squareeff"/>
          <Carousel />
        </div>
      </div>
      <div className="explore-container">
        <p>Explore More</p>
        <img className="arrow-img" src={nextArrow} alt="arrow" />
      </div>
      <div className="AskQuestion-container">
        <p>What's on your mind</p>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "60px",
            fontWeight: "600",
            lineHeight: "66px",
            letterSpacing: "-0.01em",
            textAlign: "left",
            marginTop: "5rem",
            width: "405px",
            height: "66px",
            color: "#1C1C1C",
          }}
        >
          Ask Questions
        </p>
        <img className="vector-img" src={vector} alt="vector" />
      </div>
      <div className="code-sections">
        <div className="code-section">
          <p className="samplequestion" style={{ fontSize: "20px" }}>Do you offer freelancers?</p>
          <h3 onClick={() => handleCodeDropDown("StaticQ1")}>
            {CodeDropDown.StaticQ1 ? "-" : "+"}
          </h3>
          {CodeDropDown.StaticQ1 && (
            <p className="code-sample">
              Yes, we do offer freelancers for various projects. Feel free to
              explore our talent pool for your needs!.Additionally, our
              support services aim to address any concerns, providing
              reassurance throughout the collaboration.
            </p>
          )}
          <hr className="line" />
        </div>
        <div className="code-section">
          <p className="samplequestion">
            What’s the guarantee that I will be satisfied with the hired talent?
          </p>
          <h3 onClick={() => handleCodeDropDown("StaticQ4")}>
            {CodeDropDown.StaticQ4 ? "-" : "+"}
          </h3>
          {CodeDropDown.StaticQ4 && (
            <p className="code-sample">
              We prioritize your satisfaction by thoroughly vetting our talent
              pool, ensuring expertise and professionalism. Additionally, our
              support services aim to address any concerns, providing
              reassurance throughout the collaboration.
            </p>
          )}
          <hr className="line" />
        </div>
        <div className="code-section">
          <p className="samplequestion">Can I hire multiple talents at once?</p>
          <h3 onClick={() => handleCodeDropDown("StaticQ2")}>
            {CodeDropDown.StaticQ2 ? "-" : "+"}
          </h3>
          {CodeDropDown.StaticQ2 && (
            <p className="code-sample">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </p>
          )}
          <hr className="line" />
        </div>
        <div className="code-section">
          <p className="samplequestion">Why should I not go to an agency directly?</p>
          <h3 onClick={() => handleCodeDropDown("StaticQ3")}>
            {CodeDropDown.StaticQ3 ? "-" : "+"}
          </h3>
          {CodeDropDown.StaticQ3 && (
            <p className="code-sample">
              Going through a platform like ours provides you with access to a
              broader pool of talents, potentially saving you time and costs
              associated with traditional agency fees.
            </p>
          )}
          <hr className="line" />
        </div>

        <div className="code-section">
          <p className="samplequestion">Who can help me pick a right skillset and duration for me?</p>
          <h3 onClick={() => handleCodeDropDown("StaticQ5")}>
            {CodeDropDown.StaticQ5 ? "-" : "+"}
          </h3>
          {CodeDropDown.StaticQ5 && (
            <p className="code-sample">
              Our dedicated team of experts is committed to understanding your
              unique requirements and guiding you towards the most suitable
              skillset and project duration for your needs.
            </p>
          )}
        </div>
        <div className="BottomBar">
          <img  className="csymbol-img" src={ Csymbol} alt="symbol"/>
         <p>Talup 2023. All rights reserved</p>
         <p className="Terms-Condition">Terms & Conditions</p>
         <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default MainPage;

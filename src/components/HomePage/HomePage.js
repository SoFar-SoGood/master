import React from "react";
import "./HomePage.css";
import logo from "../../assets/logo.svg";

function HomePage(props) {
  return (
    <div className="homepage-container">
      <div className="container">
        <img src={logo} className="homepage-logo" alt="logo" />
        <button onClick={props.fetchQuestions} className="homepage-button" type="button">
          LET&apos;S DIVE IN!
          {/* <Link to="/GamePage">Let's dive in!</Link> */}
        </button>
      </div>
    </div>
  );
}

export default HomePage;

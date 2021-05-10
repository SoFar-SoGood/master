import React from "react";
import "./HomePage.css";
import logo from "../../assets/logo.svg";

function HomePage(props) {
  return (
    <div className="homepage-container">
      <div className="container">
        <img src={logo} className="homepage-logo" />
        <button onClick={props.fetchQuestions} className="homepage-button">
          LET'S DIVE IN!
          {/* <Link to="/GamePage">Let's dive in!</Link> */}
        </button>
      </div>
    </div>
  );
}

export default HomePage;

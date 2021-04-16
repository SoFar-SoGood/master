import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GamePage from "./GamePage";

function HomePage(props) {
  return (
    <div>
      <button onClick={props.fetchQuestions}>
        Let's dive in!
        {/* <Link to="/GamePage">Let's dive in!</Link> */}
      </button>
    </div>
  );
}

export default HomePage;

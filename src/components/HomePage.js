import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GamePage from "./GamePage";

function HomePage() {
  return (
    <div>
      <button>
        <Link to="/GamePage">Let's dive in!</Link>
      </button>
    </div>
  );
}

export default HomePage;

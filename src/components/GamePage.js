import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ResultPage from "./ResultPage";

function GamePage() {
  return (
    <div>
      <button>
        <Link to="/ResultPage">Correct answer</Link>
      </button>
      <button>
        <Link to="/ResultPage">Incorrect answer</Link>
      </button>
      <button>
        <Link to="/ResultPage">Incorrect answer</Link>
      </button>
      <button>
        <Link to="/ResultPage">Incorrect answer</Link>
      </button>
    </div>
  );
}
export default GamePage;

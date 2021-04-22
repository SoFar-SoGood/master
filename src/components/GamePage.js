import React from "react";
import { Link } from "react-router-dom";
import ResultPage from "./ResultPage";

function GamePage() {
  return (
    <div>
      <button>
        <Link to="/resultpage">Correct answer</Link>
      </button>
      <button>
        <Link to="/resultpage">Incorrect answer</Link>
      </button>
      <button>
        <Link to="/resultpage">Incorrect answer</Link>
      </button>
      <button>
        <Link to="/resultpage">Incorrect answer</Link>
      </button>
    </div>
  );
}
export default GamePage;

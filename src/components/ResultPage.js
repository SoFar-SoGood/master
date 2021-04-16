import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ResultPage() {
  return (
    <div>
      <button>
        <Link to="/">Try Again!</Link>
      </button>
    </div>
  );
}

export default ResultPage;

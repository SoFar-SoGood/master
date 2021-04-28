import React from "react";
import { Link } from "react-router-dom";

function ResultPage(props) {
  function resetQuestions() {
    props.setQuestions([]);
    props.history.push("/");
  }

  return (
    <div>
      <button onClick={resetQuestions}>Try Again!</button>
    </div>
  );
}

export default ResultPage;

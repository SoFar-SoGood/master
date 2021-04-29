import React from "react";
import ResultMessage from "./ResultMessage";

function ResultPage(props) {
  function resetQuestions() {
    props.setQuestions([]);
    props.history.push("/");
  }

  return (
    <div>
      {props.currentQuestion <= 5 && (
        <ResultMessage message="You're not Wild enough" />
      )}
      {props.currentQuestion > 5 && props.currentQuestion <= 14 && (
        <ResultMessage message="You're not Wilder enough" />
      )}
      {props.currentQuestion === 15 && <ResultMessage message="You go girl" />}
      <button onClick={resetQuestions}>Play Again!</button>
    </div>
  );
}

export default ResultPage;

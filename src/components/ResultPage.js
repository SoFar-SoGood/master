import React from "react";
import ResultMessage from "./ResultMessage";

function ResultPage(props) {
  function resetQuestions() {
    props.setQuestions([]);
    props.history.push("/");
    props.setMoneyDisplay(100);
  }

  return (
    <div>
      {props.currentQuestion <= 5 && (
        <ResultMessage message="You're not Wild enough" />
      )}
      {props.currentQuestion > 5 && props.currentQuestion <= 14 && (
        <ResultMessage message="Try harder to be Wilder" />
      )}
      {props.currentQuestion === 15 && (
        <ResultMessage message="May the force be with you my Wildest one" />
      )}
      <button onClick={resetQuestions}>Play Again!</button>
    </div>
  );
}

export default ResultPage;

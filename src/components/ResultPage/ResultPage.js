import React from "react";
import ResultMessage from "../ResultMessage/ResultMessage";

function ResultPage(props) {
  function resetQuestions() {
    props.setQuestions([]);
    props.history.push("/");
    props.setMoneyDisplay(100);
  }

  return (
    <div className="result-page-wrapper">
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
    </div>
  );
}

export default ResultPage;

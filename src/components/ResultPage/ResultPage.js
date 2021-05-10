import React from "react";

import "./ResultPage.css";

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
          <ResultMessage
            title="You Lost!"
            message="Not Wild enough!"
            color="red"
          />
        )}
        {props.currentQuestion > 5 && props.currentQuestion <= 14 && (
          <ResultMessage
            title="You Lost!"
            message="Try harder to be Wilder!"
            color="orange"
          />
        )}
        {props.currentQuestion === 15 && (
          <ResultMessage
            title="Congratulations!"
            message="May the force be with you my Wildest one!"
            color="green"
          />
        )}

        <button onClick={resetQuestions} className="result-page-buttons" type="button">
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}

export default ResultPage;

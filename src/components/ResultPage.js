import React from "react";

function ResultPage(props) {
  function resetQuestions() {
    props.setQuestions([]);
    props.history.push("/");
  }

  return (
    <div>
      <button onClick={resetQuestions}>Play Again!</button>
    </div>
  );
}

export default ResultPage;

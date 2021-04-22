import React from "react";
import parse from "html-react-parser";

function GamePage(props) {
  const filteredQuestion = props.questions.filter((question, index) => {
    return props.currentQuestion === index + 1;
  });

  return (
    <div>
      <h1>{props.currentQuestion}.</h1>
      {filteredQuestion.map((item, index) => (
        <div key={index}>
          <h1>{parse(item.question)}</h1>
          <p> {parse(item.correct_answer)} </p>
          {item.incorrect_answers.map((answer, index) => (
            <p key={index}>{parse(answer)}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
export default GamePage;

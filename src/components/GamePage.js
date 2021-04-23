import React from "react";
import parse from "html-react-parser";

function GamePage(props) {
  const filteredQuestion = props.questions.filter((question, index) => {
    return props.currentQuestion === index + 1;
  });

  function shuffleAnswers(correctAnswer, incorrectAnswers) {
    const randomNumber = Math.floor(Math.random() * incorrectAnswers.length);

    //filtering out all the answers that aren't the correct one to allAnswers
    const allAnswers = incorrectAnswers.filter(
      (incorrectAnswer) => !incorrectAnswer.includes(correctAnswer)
    );
    //injecting correct answer at random place
    allAnswers.splice(randomNumber, 0, correctAnswer);

    return allAnswers;
  }

  const questionNumber = () => {
    return props.setCurrentQuestion(props.currentQuestion + 1);
  };

  return (
    <div>
      <h1>{props.currentQuestion}.</h1>
      {filteredQuestion.map((item, index) => (
        <div key={index}>
          <h1>{parse(item.question)}</h1>

          {shuffleAnswers(item.correct_answer, item.incorrect_answers).map(
            (answer, index) => (
              <button onClick={questionNumber} key={index}>
                {parse(answer)}
              </button>
            )
          )}
        </div>
      ))}
    </div>
  );
}
export default GamePage;

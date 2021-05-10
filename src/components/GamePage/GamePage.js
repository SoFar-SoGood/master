import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./GamePage.css";

function GamePage(props) {
  // console.log(props);
  const [userAnswerState, setUserAnswerState] = useState({});

  useEffect(() => {
    setUserAnswerState({});
  }, [props.currentQuestion]);

  const filteredQuestion = props.questions.filter(
    (question, index) => props.currentQuestion === index + 1
  );

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

  const questionStatus = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer) {
      setUserAnswerState({ userChoice: userAnswer, color: "green" });
      if (props.currentQuestion < 15) {
        setTimeout(() => {
          props.setCurrentQuestion(props.currentQuestion + 1);
        }, 1500);
      }

      if (props.currentQuestion === 14) {
        setTimeout(() => {
          props.setMoneyDisplay(1000000);
        }, 1500);
      } else {
        setTimeout(() => {
          props.setMoneyDisplay(props.moneyDisplay * 2);
        }, 1500);
      }
    } else {
      props.setMoneyDisplay(0);
      setUserAnswerState({ userChoice: userAnswer, color: "red" });
      setTimeout(() => props.history.push("/result"), 1500);
    }

    if (props.currentQuestion === 5) {
      props.fetchQuestions("medium");
    }
    if (props.currentQuestion === 10) {
      props.fetchQuestions("hard");
    }
    if (props.currentQuestion === 15) {
      setTimeout(() => props.history.push("/result"), 1500);
    }
    // console.log("correct answer:", correctAnswer, "user answer:", userAnswer);
    //props.setCurrentQuestion(props.currentQuestion + 1);
  };

  return (
    <div className="game-page-wrapper">
      <div className="game-page-width">
        {props.questions.length ? (
          <div>
            <h1 className="game-page-money-display">{props.moneyDisplay}$</h1>
            <h1 className="game-page-question-number">
              {props.currentQuestion}
            </h1>
            {filteredQuestion.map((item, index) => (
              <div key={index}>
                <h1 className="game-page-question">{parse(item.question)}</h1>
                <div className="game-page-answers-wrapper">
                  {shuffleAnswers(
                    item.correct_answer,
                    item.incorrect_answers
                  ).map((answer) => (
                    <button
                      type="button"
                      className="game-page-answers-buttons"
                      style={
                        userAnswerState.userChoice === answer
                          ? {
                              backgroundColor: userAnswerState.color,
                              opacity: "100%",
                            }
                          : null
                      }
                      onClick={() =>
                        questionStatus(answer, item.correct_answer)
                      }
                      key={index}
                      disabled={userAnswerState.userChoice ? true : false}
                    >
                      {parse(answer)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default GamePage;

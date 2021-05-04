import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import MoneyDisplay from "./MoneyDisplay";

function GamePage(props) {
  // console.log(props);
  const [userAnswerState, setUserAnswerState] = useState({});
  console.log(userAnswerState);

  useEffect(() => {
    setUserAnswerState({});
  }, [props.currentQuestion]);

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
      setTimeout(() => {
        return props.history.push("/result");
      }, 1500);
    }

    if (props.currentQuestion === 5) {
      props.fetchQuestions("medium");
    }
    if (props.currentQuestion === 10) {
      props.fetchQuestions("hard");
    }
    if (props.currentQuestion === 15) {
      setTimeout(() => {
        return props.history.push("/result");
      }, 1500);
    }
    // console.log("correct answer:", correctAnswer, "user answer:", userAnswer);
    //props.setCurrentQuestion(props.currentQuestion + 1);
  };

  return (
    <div>
      {props.questions.length ? (
        <div>
          <h1>{props.moneyDisplay}$</h1>
          <h1>{props.currentQuestion}.</h1>
          {filteredQuestion.map((item, index) => (
            <div key={index}>
              <h1>{parse(item.question)}</h1>

              {shuffleAnswers(item.correct_answer, item.incorrect_answers).map(
                (answer, index) => (
                  <button
                    style={
                      userAnswerState.userChoice === answer
                        ? { backgroundColor: userAnswerState.color }
                        : null
                    }
                    onClick={() => questionStatus(answer, item.correct_answer)}
                    key={index}
                    disabled={userAnswerState.userChoice ? true : false}
                  >
                    {parse(answer)}
                  </button>
                )
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default GamePage;

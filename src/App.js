import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import ResultPage from "./components/ResultPage";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [moneyDisplay, setMoneyDisplay] = useState(100);

  function fetchQuestions(difficulty) {
    axios
      .get(
        `https://opentdb.com/api.php?amount=5&difficulty=${difficulty}&type=multiple`
      )
      .then((response) => {
        setQuestions([...questions, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                fetchQuestions={() => {
                  // setQuestions([]);
                  fetchQuestions("easy");
                  props.history.push("/game");
                  setCurrentQuestion(1);
                }}
              />
            )}
          />

          <Route
            path="/game"
            render={(props) => (
              <GamePage
                {...props}
                fetchQuestions={fetchQuestions}
                currentQuestion={currentQuestion}
                questions={questions}
                setCurrentQuestion={setCurrentQuestion}
                moneyDisplay={moneyDisplay}
                setMoneyDisplay={setMoneyDisplay}
              />
            )}
          />

          <Route
            path="/result"
            render={(props) => (
              <ResultPage
                {...props}
                setQuestions={setQuestions}
                setMoneyDisplay={setMoneyDisplay}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
              />
            )}
          />
          {/* <Route exact path="/" component={HomePage} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;

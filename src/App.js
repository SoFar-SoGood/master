import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import ResultPage from "./components/ResultPage";

function App() {
  const [questions, setQuestions] = useState([]);

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
                  fetchQuestions("easy");
                  props.history.push("/game");
                }}
              />
            )}
          />

          <Route path="/game" component={GamePage} />
          <Route path="/result" component={ResultPage} />
          {/* <Route exact path="/" component={HomePage} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;

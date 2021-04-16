import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import ResultPage from "./components/ResultPage";

function App() {
  const [easyQuestions, setEasyQuestions] = useState([]);
  const [mediumQuestions, setMediumQuestions] = useState([]);
  const [hardQuestions, setHardQuestions] = useState([]);

  const questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
  useEffect(() => {
    console.log(questions);
  }, []);

  function easy() {
    axios
      .get("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((response) => {
        setEasyQuestions(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function medium() {
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
      )
      .then((response) => {
        setMediumQuestions(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function hard() {
    axios
      .get("https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple")
      .then((response) => {
        setHardQuestions(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <HomePage
                  {...props}
                  fetchQuestions={() => {
                    easy();
                    medium();
                    hard();
                  }}
                />
              )}
            />

            <Route path="/GamePage" component={GamePage} />
            <Route path="/ResultPage" component={ResultPage} />
            {/* <Route path="/" component={HomePage} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import ResultPage from "./components/ResultPage";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/GamePage" component={GamePage} />
            <Route path="/ResultPage" component={ResultPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

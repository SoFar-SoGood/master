import React from "react";
import "./App.css";
import Answer from "./components/Answer";
import Footer from "./components/Footer";
import GamePage from "./components/GamePage";
import HomePage from "./components/HomePage";
import MoneyDisplay from "./components/MoneyDisplay";
import Question from "./components/Question";
import ResultPage from "./components/ResultPage";
import TryAgain from "./components/TryAgain";

function App() {
  return (
    <div className="App">
      <HomePage />
      <GamePage />
      <ResultPage />
      <Footer />
      <MoneyDisplay />
      <Question />
      <Answer />
      <TryAgain />
    </div>
  );
}

export default App;

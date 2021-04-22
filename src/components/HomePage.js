import React from "react";
import GamePage from "./GamePage";

function HomePage(props) {
  return (
    <div>
      <button onClick={props.fetchQuestions}>
        Let's dive in!
        {/* <Link to="/GamePage">Let's dive in!</Link> */}
      </button>
    </div>
  );
}

export default HomePage;

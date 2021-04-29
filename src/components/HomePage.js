import React from "react";

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

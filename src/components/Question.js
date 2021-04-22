import React from "react";

function Question(props) {
  const filteredQuestions = props.questions.filter((question, index) => {
    return props.currentQuestion === index;
  });
  return <div></div>;
}
export default Question;

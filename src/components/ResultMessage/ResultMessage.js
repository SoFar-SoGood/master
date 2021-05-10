import React from "react";
const ResultMessage = (props) => {
  //console.log(props.message);
  return (
    <div>
      <div className={`result-page-message ${props.color}`}>
        <h1>{props.title}</h1>
        <h1>{props.message}</h1>
      </div>
    </div>
  );
};

export default ResultMessage;

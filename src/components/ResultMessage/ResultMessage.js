import React from "react";
const ResultMessage = (props) => {
  //console.log(props.message);
  return (
    <div>
      {props.color === "red" && (
        <div className="result-page-message red">
          <h1>{props.title}</h1>
          <h1>{props.message}</h1>
        </div>
      )}
      {props.color === "orange" && (
        <div className="result-page-message orange">
          <h1>{props.title}</h1>
          <h1>{props.message}</h1>
        </div>
      )}
      {props.color === "green" && (
        <div className="result-page-message green">
          <h1>{props.title}</h1>
          <h1>{props.message}</h1>
        </div>
      )}
    </div>
  );
};

export default ResultMessage;

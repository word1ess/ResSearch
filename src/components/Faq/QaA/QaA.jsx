import "./QaA.scss";
import React from "react";
const QaA = (props) => {
  let question = React.createRef();
  let answer = React.createRef();

  const clickQuestion = () => {
    question.current.classList.toggle("active");
    answer.current.classList.toggle("active");
  };

  return (
    <div>
      <div className="qaa__question" ref={question} onClick={clickQuestion}>
        {props.question}
      </div>
      <div className="qaa__answer" ref={answer}>
        {props.answer}
      </div>
    </div>
  );
};

export default QaA;

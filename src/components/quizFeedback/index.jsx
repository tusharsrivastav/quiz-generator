import React from "react";
import './quizFeedback.css';

const QuizFeedback = ({ sendComponentToParent, finalScore }) => {
  return (
    <div className="feedback-wrapper">
      <p>Your score is: { finalScore }</p>
      <button onClick={() => sendComponentToParent("config")}>
        Go to Home
      </button>
    </div>
  );
};

export default QuizFeedback;

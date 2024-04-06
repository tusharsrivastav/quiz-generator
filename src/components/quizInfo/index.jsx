import React from "react";
import './quizInfo.css'

const QuizInfo = ({ topic, difficulty, score }) => {
  return (
      <ul className="quiz-info">
        <li>Topic: { topic }</li>
        <li>Difficulty level: { difficulty }</li>
        <li>Score: { score }</li>
      </ul>
  );
};

export default QuizInfo;

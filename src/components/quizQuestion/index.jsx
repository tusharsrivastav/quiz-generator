import { useState } from "react";
import React from "react";
import "./quizQuestion.css";
import questions from "../../Data.jsx";

const QuizQuestion = ({
  topic,
  difficulty,
  sendComponentToParent,
  sendScoreToParent,
}) => {
  const [questionNo, setQuestionNo] = useState(0);

  const questionsList = questions.filter(
    (question) =>
      question.category === topic && question.difficulty === difficulty
  );

  const handleQuestionNo = () => {
    if (questionNo < questionsList.length - 1) {
      setQuestionNo(questionNo + 1);
    } else {
      showFeedback();
    }
  };

  const showFeedback = () => {
    sendComponentToParent("feedback");
  };

  const checkAnswer = (e) => {
    const selectedAnswer = e.target.innerText;
    if (selectedAnswer === currentQuestion.correctAnswer) {
      sendScoreToParent();
      handleQuestionNo();
    }
  };

  // Check if questionsList is empty or questionNo is out of range
  if (questionsList.length === 0 || questionNo >= questionsList.length) {
    return <div>No questions available for this category and difficulty.</div>;
  }


  const currentQuestion = questionsList[questionNo];
  const options = currentQuestion.options.map((option, index) => (
    <button key={index} className="option" onClick={checkAnswer}>
      {option}
    </button>
  ));

  return (
    <div className="wrapper">
      <div className="question">
        Q.{questionNo + 1} {currentQuestion.question}
      </div>
      <div className="options">{options}</div>
    </div>
  );
};

export default QuizQuestion;

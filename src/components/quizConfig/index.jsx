import { useState } from "react";
import React from "react";
import './quizConfig.css'

const QuizConfig = ({ sendTopicToParent, sendDifficultyToParent, sendComponentToParent }) => {
    const [topic, setTopic] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleTopicChange = (e) => {
        setTopic(e.target.value);
    }

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
    }

    const sendDataToParent = () => {
      if (topic && difficulty) {
        sendTopicToParent(topic);
        sendDifficultyToParent(difficulty);
        sendComponentToParent("question");
      }
      else {
        alert("Please select both topic and difficulty level.")
      }
    }

  return (
    <>
      <div className="config-wrapper">
        <h2>Select a topic and difficulty level to generate a quiz.</h2>
        <div className="select-fields">
          <select name="topic" value={topic} onChange={handleTopicChange}>
            <option value="">Select a topic</option>
            <option value="Math">Maths</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>

          <select name="difficulty" value={difficulty} onChange={handleDifficultyChange}>
            <option value="">Select difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button onClick={sendDataToParent}>Generate Quiz</button>
      </div>
    </>
  );
};

export default QuizConfig;

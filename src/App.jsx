import { useState } from "react";
import "./App.css";
import QuizConfig from "./components/quizConfig";
import QuizQuestion from "./components/quizQuestion";
import QuizInfo from "./components/quizInfo";
import QuizQuitBtn from "./components/quizQuitBtn";
import QuizFeedback from "./components/quizFeedback";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [activeComponent, setActiveComponent] = useState("config");
  const [currentScore, setCurrentScore] = useState(0);

  const handleTopicFromChild = (topic) => {
    setSelectedTopic(topic);
  };

  const handleDifficultyFromChild = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const handleActiveComponent = (componentToRender) => {
    setActiveComponent(componentToRender);

    if (componentToRender == "config") {
      setSelectedTopic("");
      setSelectedDifficulty("");
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "config":
        return (
          <QuizConfig
            sendTopicToParent={handleTopicFromChild}
            sendDifficultyToParent={handleDifficultyFromChild}
            sendComponentToParent={handleActiveComponent}
          />
        );

      case "question":
        return (
          <>
            <QuizInfo
              topic={selectedTopic}
              difficulty={selectedDifficulty}
              score={currentScore}
            />
            <QuizQuestion
              topic={selectedTopic}
              difficulty={selectedDifficulty}
              sendComponentToParent={handleActiveComponent}
              sendScoreToParent={handleCurrentScoreChange}
            />
            <QuizQuitBtn sendComponentToParent={handleActiveComponent} />
          </>
        );

      case "feedback":
        return <QuizFeedback sendComponentToParent={handleActiveComponent} finalScore={currentScore} />;

      default:
        return (
          <QuizConfig
            sendTopicToParent={handleTopicFromChild}
            sendDifficultyToParent={handleDifficultyFromChild}
            sendComponentToParent={handleActiveComponent}
          />
        );
    }
  };

  const handleCurrentScoreChange = () => {
    setCurrentScore(currentScore+1);
  };

  // console.log(selectedTopic);
  // console.log(selectedDifficulty);
  // console.log(currentScore);

  return (
    <>
      <h1>Quiz Generator</h1>
      {renderComponent()}
    </>
  );
}

export default App;

import React from 'react'
import './quizQuitBtn.css'

const QuizQuitBtn = ({ sendComponentToParent }) => {
  return (
    <button onClick={() => sendComponentToParent("config")}>Quit</button>
  )
}

export default QuizQuitBtn;
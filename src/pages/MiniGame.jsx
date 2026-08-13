import { useState } from "react";
import gameQuestions from "../data/Minigame.js"
import GameQuestion from "../components/Game/MiniGame.jsx"

function Game() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const question = gameQuestions[current];

  const checkAnswer = (answer) => {
    if (answer === question.answer) {
      setScore(score + 1);
      setMessage("🎉 Correct!");
    } else {
      setMessage("❌ Wrong!");
    }
  };

  const nextQuestion = () => {
    setMessage("");

    if (current < gameQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setMessage(`🏆 Game Over! Score: ${score}`);
    }
  };

  return (
    <div>
      <h1>🇮🇳 Guess the State</h1>

      <GameQuestion
        question={question}
        onAnswer={checkAnswer}
      />

      <h3>{message}</h3>

      {message && current < gameQuestions.length - 1 && (
        <button onClick={nextQuestion}>
          Next →
        </button>
      )}

      <p>
        Score: {score} | Question {current + 1}/{gameQuestions.length}
      </p>
    </div>
  );
}

export default Game;
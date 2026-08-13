import "./MiniGame.scss"

function GameQuestion({ question, onAnswer }) {
  return (
    <div className="game-question">

      <img src={question.image} alt={question.question} />

      <h2>{question.question}</h2>

      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  );
}

export default GameQuestion;
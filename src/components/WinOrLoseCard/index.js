import './index.css'

const WinOrLoseCard = properties => {
  const {score, playAgain} = properties

  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatus = score === 12 ? 'Won' : 'Lose'
  const scoreWord = score === 12 ? 'Best Score' : 'Score'

  const onClickButton = () => {
    playAgain()
  }

  return (
    <div className="result-container">
      <img src={imgUrl} className="result-img" alt="win or lose" />
      <div className="result-score-card">
        <h1 className="game-status">You {gameStatus}</h1>
        <p className="score-word">{scoreWord}</p>
        <p className="result-score">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickButton}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard

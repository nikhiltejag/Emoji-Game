// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  const scoreEl = (
    <div className="scores-container">
      <p className="score">Score: {score}</p>
      <p className="score">Top Score: {topScore}</p>
    </div>
  )

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="app-heading">Emoji Game</h1>
      </div>
      <div>{!isGameOver && scoreEl}</div>
    </nav>
  )
}

export default NavBar

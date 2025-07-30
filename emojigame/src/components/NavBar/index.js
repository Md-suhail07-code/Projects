// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, winLose} = props
  return (
    <nav>
      <div className="status">
        <img
          className="emoji-img"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1>Emoji Game</h1>
      </div>
      <div>
        {winLose ? null : (
          <div className="status">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar

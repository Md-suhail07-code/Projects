// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {win, score, playAgain} = props
  const text1 = win ? 'You Won' : 'You Lose'
  const text2 = win ? 'Best Score' : 'Score'
  const imgUrl = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const displayScore = win ? score + 1 : score
  const play = () => {
    playAgain()
  }
  return (
    <div className="result">
      <div>
        <h1>{text1}</h1>
        <p className="P">{text2}</p>
        <p className="score">{displayScore}/12</p>
        <button className='btn' type="button" onClick={play}>
          Play Again
        </button>
      </div>
      <div>
        <img alt="win or lose" className="result-img" src={imgUrl} />
      </div>
    </div>
  )
}

export default WinOrLoseCard

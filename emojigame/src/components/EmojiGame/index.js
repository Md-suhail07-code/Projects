// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    previousId: [],
    win: false,
    winLose: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  gameStatus = id => {
    const {score, topScore, previousId} = this.state
    if (previousId.includes(id)) {
      if (topScore < score) {
        this.setState({winLose: true, topScore: score})
      } else {
        this.setState({winLose: true})
      }
    } else if (score === 11) {
      this.setState(prevState => ({
        win: true,
        winLose: true,
        topScore:
          prevState.topScore < prevState.score + 1
            ? prevState.score + 1
            : prevState.topScore,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        previousId: [...prevState.previousId, id],
      }))
    }
  }

  playAgain = () => {
    this.setState({
      score: 0,
      previousId: [],
      win: false,
      winLose: false,
    })
  }

  render() {
    const {score, topScore, win, winLose} = this.state
    const emojisList = this.shuffledEmojisList()
    return (
      <div className="cont">
        <div>
          {winLose ? (
            <NavBar winLose={winLose} />
          ) : (
            <NavBar score={score} topScore={topScore} />
          )}
        </div>
        <div className="game-result">
          {winLose ? (
            <WinOrLoseCard win={win} playAgain={this.playAgain} score={score} />
          ) : (
            emojisList.map(list => (
              <EmojiCard
                key={list.id}
                details={list}
                gameStatus={this.gameStatus}
              />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame

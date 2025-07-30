// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, gameStatus} = props
  const {id, emojiName, emojiUrl} = details

  const game = () => {
    gameStatus(id)
  }

  return (
    <li key={id}>
      <button type="button" onClick={game}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

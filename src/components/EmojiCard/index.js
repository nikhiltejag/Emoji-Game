// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onSelectEmoji} = props

  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    onSelectEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

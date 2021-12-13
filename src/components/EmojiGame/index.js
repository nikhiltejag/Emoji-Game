/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojiIds: [],
    isGameOver: false,
  }

  onSelectEmoji = id => {
    let {score, isGameOver} = this.state
    const {clickedEmojiIds} = this.state
    let newIdsList

    if (!clickedEmojiIds.includes(id)) {
      score += 1
      newIdsList = [...clickedEmojiIds, id]
    } else {
      isGameOver = true
    }

    if (score === 12) {
      isGameOver = true
    }

    this.setState({
      score,
      clickedEmojiIds: newIdsList,
      isGameOver,
    })
  }

  playAgain = () => {
    console.log(this.state)
    const {score, topScore} = this.state

    this.setState({
      score: 0,
      topScore: score > topScore ? score : topScore,
      clickedEmojiIds: [],
      isGameOver: false,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    // const {emojisList} = this.props

    const renderList = this.shuffledEmojisList()

    const emojiButtons = (
      <ul className="emojis-list-container">
        {renderList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            onSelectEmoji={this.onSelectEmoji}
          />
        ))}
      </ul>
    )

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />

        <div className="bottom-section">
          {!isGameOver && emojiButtons}
          {isGameOver && (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame

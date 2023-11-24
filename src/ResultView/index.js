import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

// Getting Result Line
const scoreUpdate = verdict => {
  if (verdict === 'Win') {
    return 'YOU WIN'
  }
  if (verdict === 'Lose') {
    return 'YOU LOSE'
  }
  return 'IT IS DRAW'
}

const ResultView = props => {
  const {details, playAgainClicked} = props
  const {yourImage, roboImg, result} = details
  const line = scoreUpdate(result)
  const handlePlayAgainBtn = () => {
    playAgainClicked()
  }

  return (
    <div className="results-main-C">
      <div className="images-container">
        <div>
          <h1>YOU</h1>
          <img
            className="image-styles-ResultView"
            alt="your choice"
            src={choicesList[parseInt(yourImage)].imageUrl}
          />
        </div>
        <div>
          <h1>OPPONENT</h1>
          <img
            className="image-styles-ResultView"
            alt="opponent choice"
            src={choicesList[parseInt(roboImg)].imageUrl}
          />
        </div>
      </div>
      <div className="verdict-container">
        <h1>{line}</h1>
        <button
          onClick={handlePlayAgainBtn}
          className="play-again-button"
          type="button"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ResultView

import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ResultView from '../ResultView'
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

class Main extends Component {
  state = {
    showGame: true,
    scoreValue: 0,
    selectedImageValue: '',
    randomImageValue: '',
    result: '',
  }

  playAgainClicked = () => {
    this.setState({
      showGame: true,
      selectedImageValue: '',
      randomImageValue: '',
      result: '',
    })
  }

  calculate = (i, j) => {
    let result = ''
    if (i === j) {
      result = 'Draw'
    } else if (i === 0) {
      if (j === 1) {
        result = 'Win'
      } else {
        result = 'Lose'
      }
    } else if (i === 1) {
      if (j === 0) {
        result = 'Lose'
      } else {
        result = 'Win'
      }
    } else if (j === 0) {
      result = 'Win'
    } else {
      result = 'Lose'
    }
    return result
  }

  scoreUpdate = verdict => {
    if (verdict === 'Win') {
      return 1
    }
    if (verdict === 'Lose') {
      return -1
    }
    return 0
  }

  handleImageButton = event => {
    const {scoreValue} = this.state
    const randomValue = Math.floor(Math.random() * 3)
    const verdict = this.calculate(parseInt(event.target.id), randomValue)
    const score = this.scoreUpdate(verdict)
    const newScoreValue = scoreValue + score

    this.setState({
      selectedImageValue: event.target.id,
      randomImageValue: randomValue,
      showGame: false,
      scoreValue: newScoreValue,
      result: verdict,
    })
  }

  renderShowGameView = () => (
    <div className="rock-p-s-container">
      <div className="rock-s-container">
        <button
          className="image-btn"
          type="button"
          onClick={this.handleImageButton}
          data-testid="rockButton"
        >
          <img
            id="0"
            className="rps-img-styles"
            alt={choicesList[0].id}
            src={choicesList[0].imageUrl}
          />
        </button>

        <button
          className="image-btn"
          type="button"
          onClick={this.handleImageButton}
          data-testid="scissorsButton"
        >
          <img
            id="1"
            className="rps-img-styles"
            alt={choicesList[1].id}
            src={choicesList[1].imageUrl}
          />
        </button>
      </div>
      <div className="paper-container">
        <button
          data-testid="paperButton"
          className="image-btn"
          type="button"
          onClick={this.handleImageButton}
        >
          <img
            id="2"
            className="rps-img-styles"
            alt={choicesList[2].id}
            src={choicesList[2].imageUrl}
          />
        </button>
      </div>
    </div>
  )

  render() {
    const {
      showGame,
      scoreValue,
      selectedImageValue,
      randomImageValue,
      result,
    } = this.state
    const details = {
      yourImage: selectedImageValue,
      roboImg: randomImageValue,
      result,
    }
    return (
      <div className="main-container">
        <div className="score-container">
          <div>
            <h1 className="rps-text">ROCK</h1>
            <h1 className="rps-text">PAPER</h1>
            <h1 className="rps-text">SCISSORS</h1>
          </div>
          <div className="score-count-container">
            <p>Score</p>
            <p>{scoreValue}</p>
          </div>
        </div>
        {showGame ? (
          this.renderShowGameView()
        ) : (
          <ResultView
            details={details}
            playAgainClicked={this.playAgainClicked}
          />
        )}
        {/* POP UP SNIPPET */}
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button className="rules-button" type="button">
                Rules
              </button>
            }
          >
            {close => (
              <div className="popup-image-with-close-btn-C">
                <button
                  className="close-icon-btn"
                  aria-label="Save"
                  type="button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <img
                  className="rules-image"
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default Main

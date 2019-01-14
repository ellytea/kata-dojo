import React, {Component} from 'react';

class FlashCard extends Component {
  constructor(props) {
    super()
  }

  flipCard = () => {
    let element = document.getElementById('flip');
    element.classList.toggle('flipped');
  }

  checkAnswer = (event) => {
    let choice = event.target.innerText;
    if (choice === this.props.currentFlashCard.method) {
      this.flipCard();
    }
  }

  handleClick = () => {
    this.props.answerCorrect();
    this.props.toggleFlashCard();
  }


  render() {
    let cardRender;
    if ((this.props.earnedCards || []).includes(this.currentFlashCard)) {
      cardRender = <p>{this.currentFlashCard.method}</p>
    } else {
      cardRender =(
         <div>
         <div class="front">
          <p>This prototype method: </p>
          <p className="description">{this.props.currentFlashCard.description}</p>
          {
            this.props.currentFlashCard.answers.map((item) => {
              return <button onClick={this.checkAnswer}>{item}</button>
            })
          }
        </div>
        <div class="back">
          <p>Back</p>
          <button onClick={this.handleClick}>Save Card</button>
        </div>
         </div>
        )
    }
    return (
      <section id="flip" className="flash-card">
        {cardRender}
      </section>
    )
  }
}

export default FlashCard;
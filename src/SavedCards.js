import React, {Component} from 'react';

class SavedCards extends Component {
  constructor(props){
    super()
    this.state = {
      showSaved: false
    }
  }

  toggleSavedCards = () => {
    this.setState({
      showSaved: !this.state.showSaved
    });
  }


  render() {
    let earnedCards = this.props.earnedCards || []
    let toggleRender;
    if (earnedCards.length === 0) {
      toggleRender = this.state.showSaved && <p>Start earning!</p>
    } else {
      toggleRender = this.state.showSaved && <ul>{earnedCards.map(item => <li>{item.method}</li>)}</ul>
    }
    let icon;
    this.state.showSaved ? icon = '-' : icon = '+';
    return (
      <section className="saved-cards">
        <h3 onClick={this.toggleSavedCards}>{icon} Earned Flashcards</h3>
        {toggleRender}
      </section>
      )
  }
}

export default SavedCards;
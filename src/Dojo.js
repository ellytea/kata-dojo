import React, { Component } from 'react';
import ArrayMethods from './ArrayMethods.js';
import StringMethods from './StringMethods.js';
import ObjectMethods from './ObjectMethods.js';
import SavedCards from './SavedCards';
import FlashCard from './FlashCard';


class Dojo extends Component {
  constructor(props) {
    super()
    this.state = {
      showFlashCard: false,
      currentFlashCard: null
    }
  }

  toggleFlashCard = () => {
    this.setState({
      showFlashCard: !this.state.showFlashCard
    });
  }

  getArrayMethod = (event) => {
    const type = event.target.innerText;
    let methodType = this.props.arrayMethods.find((item) => {
      return item[type];
    });
    let newMethod = methodType[type].reduce((acc, item) => {
      let random = Math.floor(Math.random() * methodType[type].length);
      acc = methodType[type][random]
      return acc;
    }, {});
    this.setState({
      currentFlashCard: newMethod
    });
    this.toggleFlashCard();
  }

  getStringMethod = () => {
    let random = Math.floor(Math.random() * this.props.stringMethods.length);
    let method = this.props.stringMethods[random];
    this.setState({
      currentFlashCard: method
    });
    this.toggleFlashCard();
  }

  getObjectMethod = () => {
    let random = Math.floor(Math.random() * this.props.objectMethods.length);
    let method = this.props.objectMethods[random];
    this.setState({
      currentFlashCard: method
    });
    this.toggleFlashCard();
  }



  render() {
    return (
      <div className="Dojo">
        <ArrayMethods getMethod={this.getArrayMethod} arrayMethods={this.props.arrayMethods} />
        <StringMethods getMethod={this.getStringMethod} />
        <ObjectMethods getMethod={this.getObjectMethod} />
        <SavedCards currentFlashCard={this.state.currentFlashCard} />
        {(this.state.showFlashCard)
          && (<FlashCard currentFlashCard={this.state.currentFlashCard}
                         toggleFlashCard={this.toggleFlashCard} />)}
      </div>
    );
  }

}

export default Dojo;
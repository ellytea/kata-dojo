import React, { Component } from 'react';
import ArrayMethods from './ArrayMethods.js';
import StringMethods from './StringMethods.js';
import ObjectMethods from './ObjectMethods.js';
import SavedCards from './SavedCards';
import FlashCard from './FlashCard';
import data from './data.js';


class Dojo extends Component {
  constructor() {
    super()
    this.state = {
      arrayMethods: null,
      stringMethods: null,
      objectMethods: null,
      showFlashCard: false,
      description: null,
      cardButtons: null
    }
  }

  setArrayMethods = () => {
    this.setState({
      arrayMethods: data.arrayPrototypeMethods
    });
  }

  setStringMethods = () => {
    this.setState({
      stringMethods: data.stringPrototypeMethods
    });
  }

  setObjectMethods = () => {
    this.setState({
      objectMethods: data.objectPrototypeMethods
    });
  }

  toggleFlashCard = () => {
    this.setState({
      showFlashCard: !this.state.showFlashCard
    });
  }

  getArrayMethod = (event) => {
    const type = event.target.innerText;
    this.toggleFlashCard();
    let methodType = this.state.arrayMethods.find((item) => {
      return item[type];
    });
    let newMethod = methodType[type].reduce((acc, item) => {
    let random = Math.floor(Math.random() * methodType[type].length);
      acc = methodType[type][random]
      return acc;
    }, {});
    this.setState({
      description: newMethod.description,
      cardButtons: newMethod.answers
    });
  }

  render() {
    return (
      <div className="Dojo">
        <ArrayMethods setArrayMethods={this.setArrayMethods} arrayMethods={this.state.arrayMethods}
                      getMethod={this.getArrayMethod} />
        <StringMethods setStringMethods={this.setStringMethods} />
        <ObjectMethods setObjectMethods={this.setObjectMethods} />
        <SavedCards />
        {(this.state.showFlashCard)
          && (<FlashCard description={this.state.description}
                         cardButtons={this.state.cardButtons}
                         arrayMethods={this.state.arrayMethods}
                         stringMethods={this.state.stringMethods}
                         objectMethods={this.state.objectMethods} />)}
      </div>
    );
  }

}

export default Dojo;
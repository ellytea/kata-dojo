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
    let arrMethods = data.prototypeMethods.find((method) => {
      return method.arrayPrototypeMethods;
    });
    this.setState({
      arrayMethods: arrMethods.arrayPrototypeMethods
    });
  }

  setStringMethods = () => {
    let strMethods = data.prototypeMethods.find((method) => {
      return method.stringPrototypeMethods
    });
    this.setState({
      stringMethods: strMethods.stringPrototypeMethods
    });
  }

  setObjectMethods = () => {
    let objMethods = data.prototypeMethods.find((method) => {
      return method.objectPrototypeMethods
    });
    this.setState({
      objectMethods: objMethods.objectPrototypeMethods
    });
  }

  toggleFlashCard = () => {
    this.setState({
      showFlashCard: !this.state.showFlashCard
    });
  }

  getMethod = (event) => {
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
      description: newMethod.description
    });
    this.setState({
      cardButtons: newMethod.answers
    })
  }

  render() {
    return (
      <div className="Dojo">
        <ArrayMethods setArrayMethods={this.setArrayMethods} arrayMethods={this.state.arrayMethods}
                      getMethod={this.getMethod} />
        <StringMethods setStringMethods={this.setStringMethods}
                       getMethod={this.getMethod} />
        <ObjectMethods setObjectMethods={this.setObjectMethods}
                       getMethod={this.getMethod} />
        <SavedCards />
        {(this.state.showFlashCard)
          && (<FlashCard description={this.state.description}
                         arrayMethods={this.state.arrayMethods}
                         stringMethods={this.state.stringMethods}
                         objectMethods={this.state.objectMethods} />)}
      </div>
    );
  }

}

export default Dojo;
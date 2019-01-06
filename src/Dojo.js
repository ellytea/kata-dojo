import React, { Component } from 'react';
import ArrayMethods from './ArrayMethods.js';
import StringMethods from './StringMethods.js';
import ObjectMethods from './ObjectMethods.js';
import SavedCards from './SavedCards';
import data from './data.js';


class Dojo extends Component {
  constructor() {
    super()
    this.state = {
      arrayMethods: [],
      stringMethods: [],
      objectMethods: []
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

  render() {
    return (
      <div className="Dojo">
        <ArrayMethods setArrayMethods={this.setArrayMethods} />
        <StringMethods setStringMethods={this.setStringMethods} />
        <ObjectMethods setObjectMethods={this.setObjectMethods} />
        <SavedCards />
      </div>
    );
  }

}

export default Dojo;
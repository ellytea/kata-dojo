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
    
  }

  render() {
    return (
      <div className="Dojo">
        {console.log('HELLO')}
        <ArrayMethods setArrayMethods={this.setArrayMethods} />
        <StringMethods />
        <ObjectMethods />
        <SavedCards />
      </div>
    );
  }

}

export default Dojo;
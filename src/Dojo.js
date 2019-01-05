import React, { Component } from 'react';
import ArrayMethods from './ArrayMethods.js';
import StringMethods from './StringMethods.js';
import ObjectMethods from './ObjectMethods.js';


class Dojo extends Component {
  constructor() {
    super()
    this.state = {
      arrayMethods: [],
      stringMethods: [],
      objectMethods: []
    }
  }

  render() {
    return (
      <div className="Dojo">
        <ArrayMethods />
        <StringMethods />
        <ObjectMethods />
      </div>
    );
  }

}

export default Dojo;
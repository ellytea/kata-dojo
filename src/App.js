import React, { Component } from 'react';
import Header from './Header.js'
import Dojo from './Dojo.js'
import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Dojo />
      </div>
    );
  }
}


export default App;
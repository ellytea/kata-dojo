import React, { Component } from 'react';
import Header from './Header.js'
import Dojo from './Dojo.js'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      showOverlay: true,
      arrData: null,
      strgData: null,
      objData: null,
      playerName: null
    }
  }


  fetchData = () => {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/arrayPrototypeMethods')
      .then(response => response.json())
      .then(data => {
        this.setState({
           arrData: data.arrayPrototypeMethods
        })
      })
      .catch(error => console.log('array-fetch', error));

    fetch('http://memoize-datasets.herokuapp.com/api/v1/stringPrototypeMethods')
      .then(response => response.json())
      .then(data => {
        this.setState({
           strgData: data.stringPrototypeMethods
        })
      })
      .catch(error => console.log('string-fetch', error));

    fetch('http://memoize-datasets.herokuapp.com/api/v1/objectPrototypeMethods')
      .then(response => response.json())
      .then(data => {
        this.setState({
           objData: data.objectPrototypeMethods
        })
      })
      .catch(error => console.log('object-fetch', error));
  }


  toggleOverlay = () => {
    this.fetchData();
    this.setState({
      showOverlay: !this.state.showOverlay
    });
  }

  handleEnterClick = () => {
    let name = document.querySelector('.input-name').value;
    this.setState({
      playerName: name
    });
    this.toggleOverlay();
  }

  answerCorrect = (card, method, methodType) => {
    const earnedCards = Object.assign([], this.state.earnedCards);
    if (method === 'arr') {
      const data = Object.assign([], this.state.arrData);
      const item = data.find((item) => item[methodType] != null)
      const itemIndex = this.state.arrData.indexOf(item)
      const cardIndex = item[methodType].indexOf(card)
      item[methodType].splice(cardIndex, 1)
      data[itemIndex] = item
      earnedCards.push(card)
      this.setState({
        arrData: data,
        earnedCards, 
      });
    } else if (method === 'string') {
      const data = Object.assign([], this.state.strgData);
      const cardIndex = data.indexOf(card)
      data.splice(cardIndex, 1)
      earnedCards.push(card)
      this.setState({
        strgData: data,
        earnedCards,
      });
    } else if (method === 'object') {
      const data = Object.assign([], this.state.objData);
      const cardIndex = data.indexOf(card)
      data.splice(cardIndex, 1)
      earnedCards.push(card)
      this.setState({
        objData: data,
        earnedCards,
      });
    }
  }

  render() {
    return (
      <div className="App">
      {(this.state.showOverlay) && 
        <section className="overlay">
          <h1 className="welcome">Welcome!</h1>
          <input className="input-name" type="text" placeholder="Enter ninja name"/>
          <button className="enter" onClick={this.handleEnterClick}>Enter</button>
       </section>}
        <Header playerName={this.state.playerName} />
        <Dojo arrayMethods={this.state.arrData}
              stringMethods={this.state.strgData}
              objectMethods={this.state.objData} 
              answerCorrect={this.answerCorrect}
              earnedCards={this.state.earnedCards} />
      </div>
    );
  }
}


export default App;
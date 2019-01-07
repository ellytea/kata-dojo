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
      objData: null
    }
  }

  componentDidMount(){
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
    this.setState({
      showOverlay: !this.state.showOverlay
    })
  }


  render() {
    return (
      <div className="App">
      {(this.state.showOverlay) && <section className="overlay">
                                      <h1>Welcome!</h1>
                                      <input value="ninja name"/>
                                      <button onClick={this.toggleOverlay}>Enter</button>
                                   </section>}
        <Header />
        <Dojo arrayMethods={this.state.arrData}
              stringMethods={this.state.strgData}
              objectMethods={this.state.objData} />
      </div>
    );
  }
}


export default App;
import React, { Component } from 'react';

class Header extends Component {
  constructor(){
    super()
  }

  

  render() {
    return (
        <header className="Header">
          <img src="" alt="" width="20" />
          <h1 className="app-name">
            Dojo.kata()<span className='exclaim'>!</span>
          </h1>
          <div className="dropdown">
            <span>Dojo Rules &#9660;</span>
            <div className="dropdown-content">
              <p>Select which type of method to practice and save to your card bank!</p>
            </div>
        </div>
        </header>
    );
  }
}

export default Header;
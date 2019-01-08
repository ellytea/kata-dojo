import React, {Component} from 'react';

class StringMethods extends Component {
  constructor(props) {
    super()
    this.state = {
      showStart: false
    }

  }

  toggleStart = () => {
    this.setState({
      showStart: !this.state.showStart
    });
  }


  handleStartClick = () => {
    this.props.getMethod();
    this.toggleStart();
  }


  render() {
    const stringMethods = this.props.stringMethods || [];
    let toggleRender;
    if (stringMethods.length === 0) {
      toggleRender = this.state.showStart && <p>You have them!</p>
    } else {
      toggleRender = this.state.showStart && <p className="start" onClick={this.handleStartClick}>Start!</p>
    }
    let icon;
    this.state.showSaved ? icon = '-' : icon = '+';
    return (
      <section className="String-cards">
        <h3 className="title" onClick={this.toggleStart}>{icon} String Methods</h3>
        {toggleRender}
      </section>
      )
  }
}

export default StringMethods;
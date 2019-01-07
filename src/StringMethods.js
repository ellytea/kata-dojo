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

  handleClick = () => {
    this.props.setStringMethods();
    this.toggleStart();
  }


  render() {
    let icon = '+';
    if (this.state.showStart) {
      icon = '-';
    }
    return (
      <section className="String-cards">
        <h3 className="title" onClick={this.handleClick}>{icon} String Methods</h3>
        {this.state.showStart && <p className="start">Start!</p>}
      </section>
      )
  }
}

export default StringMethods;
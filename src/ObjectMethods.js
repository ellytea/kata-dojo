import React, {Component} from 'react';

class ObjectMethods extends Component {
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
    let icon = '+';
    if (this.state.showStart) {
      icon = '-';
    }
    return (
      <section className="Object-cards">
        <h3 className="title" onClick={this.toggleStart}>{icon} Object Methods</h3>
        {this.state.showStart && <p className="start" onClick={this.handleStartClick}>Start!</p>}
      </section>
      )
  }
}

export default ObjectMethods;
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
    const objectMethods = this.props.objectMethods || [];
    let toggleRender;
    if (objectMethods.length === 0) {
      toggleRender = this.state.showStart && <p>You have them!</p>
    } else {
      toggleRender = this.state.showStart && <p className="start" onClick={this.handleStartClick}>Start!</p>
    }
    let icon;
    this.state.showStart ? icon = '-' : icon = '+';
    return (
      <section className="Object-cards">
        <h3 className="title" onClick={this.toggleStart}>{icon} Object Methods</h3>
        {toggleRender}
      </section>
      )
  }
}

export default ObjectMethods;
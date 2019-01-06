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

  handleClick = () => {
    this.props.setObjectMethods();
    this.toggleStart();
  }


  render() {
    let icon = '+';
    if (this.state.showStart) {
      icon = '-';
    }
    return (
      <section className="Object-cards">
        <h3 className="title" onClick={this.handleClick}>{icon} Object Methods</h3>
        {this.state.showStart && <p>Start!</p>}
      </section>
      )
  }
}

export default ObjectMethods;
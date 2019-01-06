import React, {Component} from 'react';

class ObjectMethods extends Component {
  constructor(props) {
    super()
  }


  render() {
    return (
      <section className="Object-cards">
        <h3 className="title" onClick={this.props.setObjectMethods}>Object Methods</h3>
      </section>
      )
  }
}

export default ObjectMethods;
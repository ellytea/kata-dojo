import React, {Component} from 'react';

class ArrayMethods extends Component {
  constructor(props) {
    super()
  }


  render() {
    return (
      <section className="Array-cards">
        <h3 className="title" onClick={this.props.setArrayMethods}>Array Methods</h3>
      </section>
      )
  }
}

export default ArrayMethods;
import React, {Component} from 'react';

class StringMethods extends Component {
  constructor(props) {
    super()

  }


  render() {
    return (
      <section className="String-cards">
        <h3 className="title" onClick={this.props.setStringMethods}>String Methods</h3>
      </section>
      )
  }
}

export default StringMethods;
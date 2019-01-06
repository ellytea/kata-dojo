import React, {Component} from 'react';

class ArrayMethods extends Component {
  constructor(props) {
    super()
    this.state = {
      showMethodTypes: false
    }
  }

  toggleMethodTypes = () => {
    this.setState({
      showMethodTypes: !this.state.showMethodTypes
    })
  }

  handleClick = () => {
    this.props.setArrayMethods();
    this.toggleMethodTypes();
  }


  render() {
    let icon = '+';
    if (this.state.showMethodTypes) {
      icon = '-';
    }
    return (
      <section className="Array-cards">
        <h3 className="title" onClick={this.handleClick}>{icon} Array Methods</h3>
        {this.state.showMethodTypes && 
          <ul>{
            this.props.arrayMethods.map((type) => {
              let key = Object.keys(type)[0]
              return <li>{key}</li>
            })
          }</ul>}
      </section>
      )
  }
}

export default ArrayMethods;
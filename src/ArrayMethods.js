import React, {Component} from 'react';

class ArrayMethods extends Component {
  constructor(props) {
    super()
    this.state = {
      showMethodTypes: false,
    }
  }

  toggleMethodTypes = () => {
    this.setState({
      showMethodTypes: !this.state.showMethodTypes
    });
  }

  handleTypeClick = (event) => {
    this.props.getMethod(event);
    this.toggleMethodTypes();
  }


  render() {
    let icon;
    this.state.showSaved ? icon = '-' : icon = '+';
    return (
      <section className="Array-cards">
        <h3 className="title" onClick={this.toggleMethodTypes}>{icon} Array Methods</h3>
        {this.state.showMethodTypes && 
          <ul>{
            this.props.arrayMethods.map((type) => {
              let key = Object.keys(type)[0]
              if (type[key].length == 0){
                return
              }
              return <li className="arr-type" onClick={this.handleTypeClick}>{key}</li>
            })
          }</ul>}
      </section>
      )
  }
}

export default ArrayMethods;
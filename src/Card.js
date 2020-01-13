import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  render() {
    return (
      <img
        src={this.props.url}
        alt="img"
      ></img>
    )
  }
}

export default Card
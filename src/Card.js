import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  render() {
    return <img src={this.props.url}></img>
  }

}

export default Card
import React, { Component } from 'react';
import axios from 'axios'
import Card from './Card'
import ScrollBottom from './ScrollBottom'


import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      baseURL: 'https://dog.ceo/api/breed/',
      data: [],
      type: 'pug'
    }
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios({
      method: 'get',
      url: `${this.state.baseURL}${this.state.type}/images/random/30`
    })
    .then(res => {
      this.setState({
        data: [...this.state.data, ...res.data.message]
      })
    })
  }

  renderCards() {
    if (!this.state.data) return <div></div>
    return this.state.data.map((src, idx) => {
      return (
        <Card
          key={idx}
          url={src}
        />
      )
    })
  }

  render() {
    return (
      <div className="App">

        {this.renderCards()}
        <ScrollBottom reachBottom={this.getData}/>
      </div>
    );
  }
}

export default App;

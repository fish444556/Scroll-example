import React, { Component } from 'react';
import axios from 'axios'
import Card from './Card'
import ScrollBottom from './ScrollBottom'
import {
  AppBar,
  Toolbar,
} from '@material-ui/core/';



import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      baseURL: 'https://dog.ceo/api/breed/',
      data: [],
      type: 'pug',
      existImg: new Set()
    }
    this.getData = this.getData.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
      let tmp = []
      res.data.message.forEach(img => {
        if (!this.state.existImg.has(img)) {
          tmp.push(img)
          this.state.existImg.add(img)
        }
      })
      this.setState({
        data: [...this.state.data, ...tmp]
      })
    })
  }

  handleChange(e) {
    this.setState({
      type: e.target.value,
      data: [],
      existImg: new Set()
    }, () => this.getData())
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
        <AppBar position="static">
          <Toolbar>
            <select onChange={this.handleChange}>
              <option value="pug">Pug</option>
              <option value="african">African</option>
              <option value="shihtzu">Shihtzu</option>
            </select>
          </Toolbar>
        </AppBar>
        {this.renderCards()}
        <ScrollBottom reachBottom={this.getData}/>
      </div>
    );
  }
}

export default App;

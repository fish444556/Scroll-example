import React, { Component } from 'react';
import { debounce } from 'lodash'

class ScrollBottom extends Component {
  constructor(props) {
    super(props)

    this.handleScroll = debounce(this.handleScroll.bind(this), 200, { trailing: true })
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const scrollEle = document.scrollingElement || document.documentElement
    if (scrollEle.scrollHeight <= scrollEle.scrollTop + window.innerHeight * 1.5) {
      this.props.reachBottom()
    }
  }

  render() {
    return !this.props.children ? null : <div>{this.props.children}</div>
  }

}

export default ScrollBottom
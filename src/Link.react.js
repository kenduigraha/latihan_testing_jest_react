import React, { Component } from 'react'

export default class Link extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentClass : 'normal'
    }

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter(){
    this.setState({
      currentClass: 'hovered'
    })
  }

  onMouseLeave(){
    this.setState({
      currentClass: 'normal'
    })
  }

  render(){
    return(
      <a className={this.state.currentClass} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} href={this.props.page || '#'} >
        {this.props.children}
      </a>
    )
  }
}

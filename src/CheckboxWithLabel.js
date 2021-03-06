import React, { Component } from 'react'

export default class CheckboxWithLabel extends Component {
  constructor(props){
    super(props)
    this.state = {
      isChecked: false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(){
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render(){
    return(
      <label>
        <input type="checkbox" onChange={this.onChange} checked={this.state.isChecked} />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff }
      </label>
    )
  }
}

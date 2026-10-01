import React, { Component } from 'react'

export class Toggle extends Component {
    state={Text:"Welcome"}
    changeVal=()=>{
        this.setState({Text:"Good bye!"})
    }
  render() {
    return (
      <div>
        <p>{this.state.Text}</p>
        <button onClick={this.changeVal}>Click Toggle</button>
      </div>
    )
  }
}

export default Toggle

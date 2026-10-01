import React, { Component } from 'react'

export class Counter extends Component {
    state = {count:0}
    changeVal=()=>{
        this.setState({count:this.state.count+1});
    }
  render() {
    return (
      <div>
        <h1>Count value id:{this.state.count}</h1>
        <button onClick={this.changeVal}>Increment Count</button>
      </div>
    )
  }
}

export default Counter


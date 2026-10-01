import React, { Component } from 'react'

export class Reset extends Component {
    state={count:0}
    changeVal1=()=>{
        this.setState({count:this.state.count+1})
    }
    changeVal2=()=>{
        this.setState({count:this.state.count=0})
    }
  render() {
    return (
      <div>
        <h1>Reset Count:{this.state.count}</h1>
        <button onClick={this.changeVal1}>Increment Count</button>
        <button onClick={this.changeVal2}>Reset Count</button>
      </div>
    )
  }
}

export default Reset

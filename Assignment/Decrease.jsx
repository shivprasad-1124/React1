import React, { Component } from 'react'

export class Decrease extends Component {
    state={count:10}
    changeVal=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>Count value id:{this.state.count}</h1>
        <button onClick={this.changeVal}>Decrement Count</button>
      </div>
    )
  }
}

export default Decrease

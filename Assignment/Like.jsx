import React, { Component } from 'react'

export class Like extends Component {
    state={count:0}
    changeVal=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1>Likes Count:{this.state.count}</h1>
        <button onClick={this.changeVal}>Likes</button>
      </div>
    )
  }
}

export default Like

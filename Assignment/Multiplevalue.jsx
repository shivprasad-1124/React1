import React, { Component } from 'react'

export class Multiplevalue extends Component {
    state={name:"Shivu",age:22,couse:"JFS"}
    changeVal=()=>{
        this.setState({age:25})
    }
  render() {
    return (
      <div>
        <h1>Update age:{this.state.age}</h1>
        <button onClick={this.changeVal}>Update age</button>
      </div>
    )
  }
}

export default Multiplevalue

import React, { Component } from 'react'

export class Name extends Component {
    state={name:"Raj"}
    changeVal=()=>{
        this.setState({name:"Kumar"})
    }
  render() {
    return (
      <div>
        <h1>Student name:{this.state.name}</h1>
        <button onClick={this.changeVal}>Update button</button>
      </div>
    )
  }
}

export default Name

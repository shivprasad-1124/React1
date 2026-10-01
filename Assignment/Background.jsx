import React, { Component } from 'react'

export class Background extends Component {
    state={Bg:"red"}
    changeVal=()=>{
        this.setState({Bg:"yellow"})
    }
  render() {
    return (
      <div style={{backgroundColor:this.state.Bg}}>  
        <p>{this.state.Bg}</p>
        <button onClick={this.changeVal}>Change Color</button>
      </div>
    )
  }
}

export default Background

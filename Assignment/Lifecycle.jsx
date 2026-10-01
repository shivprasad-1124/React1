import React, { Component } from 'react'

export default class Lifecycle extends Component {
    componentDidMount(){
        console.log("component mounted")
    }
    state={age:34}
    changeAge=()=>{
        this.setState({age:56})
    }
    componentDidUpdate(){
        console.log("age is changed")
    }
    sayHi=()=>{
        setInterval(()=>{
            console.log("hi")
        },1000)
    }
    

  render() {
    return (
      <div>
        <h1>Mounting stage</h1>
        <p>My age is{this.state.age}</p>
        <button onClick={this.changeAge}>click</button>
        <button onClick={this.sayHi}>Sayhi</button>
      </div>
    )
  }
}

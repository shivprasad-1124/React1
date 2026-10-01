import React, { Component } from 'react'

export class Hide extends Component {
    state={value:"true"}
    changeVal=()=>{
        this.setState({value:"false"})
    }
  render() {
    return (
      <div>
        changeVal&&<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ab ducimus odit natus? Beatae recusandae rerum aperiam optio, ad excepturi!{this.state}</p>
        <button onClick={this.changeVal}>Click Hide</button> 
      </div>
    )
  }
}

export default Hide

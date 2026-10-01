import React,{Component} from "react";
class ClassComp4 extends React.Component{
    state={count:0}
    changeVal1=()=>{
        this.setState({count:this.state.count+1});
    }
    changeVal2=()=>{
        this.setState({count:this.state.count-1});
    }
    render(){
        return(
            <>
            <h1>Count Value id:- {this.state.count}</h1>
            <button onClick={this.changeVal1}>Increment Count</button>
            <button onClick={this.changeVal2}>Decrement Count</button>

            </>
        )
    }

}
export default ClassComp4;
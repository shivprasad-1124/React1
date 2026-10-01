import React,{Component} from 'react'
{/* <script src="https://cdn.tailwindcss.com"></script> */}
class ClassComp extends  Component{
    state={button:"subscribe",msg:"please subscribe",msg1:"our channel"}
    changeVal=()=>{
        this.setState({button:"subscribed"});
        this.setState({msg:"Thanks for subscribtion"})
        this.setState({msg1:"Welcome to our Channel"})
    }
    render(){
        return(
            <>
            <p>{this.state.msg},{this.state.msg1}</p>
             <button onClick={this.changeVal}>{this.state.button}</button>
            </>
        )
    }
}
export default ClassComp;
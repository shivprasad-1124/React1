import React,{Component} from "react";
class ClassComp3 extends React.Component{
    state = {button:"Subscribe",link:"https://i.fbcd.co/products/resized/resized-750-500/347057ef7792b97446ca4bb0005411242457adb9155d81ae47d988243da5f4a8.jpg"}
    changeVal=()=>{
        this.setState({button:"Subscribed"})
        this.setState({link:"https://www.clipartmax.com/png/middle/18-185824_bell-icon-bell-icon.png"})
    }
    render(){
        return(
            <>
            <img src={this.state.link}></img>
             <button onClick={this.changeVal}>{this.state.button}</button>
            </>
        )

    }
}
export default ClassComp3;

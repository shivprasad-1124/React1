
import React,{Component} from "react";
class ClassComp2 extends React.Component{
    state = {
    dress: "https://i.pinimg.com/564x/85/b3/69/85b3695f3c1698bd82fd4c6a39527e2a.jpg"}
    changeVal1=()=>{
        this.setState({dress:"https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg"});
    }
    changeVal2=()=>{
        this.setState({dress:"https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png"})
    }
    render(){
        return(
            <>
            <img src={this.state.dress}></img>
            <button onClick={this.changeVal1}>India</button>
            <button onClick={this.changeVal2}>Rcb</button>
            </>
        )
    }
}
export default ClassComp2;



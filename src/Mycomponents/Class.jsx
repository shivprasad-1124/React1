import React,{Component} from "react";

class Class extends Component{
    render(){
        return(
            <>
            <h1>This is Class Component</h1>
            <p>my role is {this.props.role} in {this.props.city}</p>
            </>

        )
    }
}
export default Class;
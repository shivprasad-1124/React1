import React,{Component} from 'react'
class ClassComp1 extends React.Component{
    state={name:"prasad",age:22,gender:"male"};
     changeVal =()=>{
        this.setState({name:"Shivprasad"})

    }
    render(){
        return(
            <>
            <h1>This is class component</h1>
            <p>my name is {this.state.name}</p>
            <p>And my age is {this.state.age}</p>
            <button onClick={this.changeVal}>Click to change name</button>
            </>
        )
    }

}
export default ClassComp1;
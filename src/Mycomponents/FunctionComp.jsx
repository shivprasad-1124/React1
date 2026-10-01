import React from "react";

function FunctionComp({name,age}){
    return(
        <>
        <h1>This is functional Component</h1>
        {/* <h1>my name is {props.name}</h1>
        <h1>my age is {props.age}</h1> */}
        <h1>my name is {name}</h1>
        <h1>my age is {age}</h1>
        </>
    )
} 
export default FunctionComp;
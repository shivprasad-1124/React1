import React from "react";
import "./Body.css";

function Body(){
    return(
        <>
            <div className="body">
                <h1>Premium, Structured Courses for 'Tech Career'</h1>
                <h2>Join 1,25,000+ successful students who have transformed their lives with us.</h2>
            </div>
            <div className="nav">
                <input type="text" name="fullname" placeholder="fullname*" />
                <input type="text" name="email address" placeholder="email address*" />
                <input type="text" name="Contact number" placeholder="Contact number*" />
            <button className="submit">submit now</button>
            </div>
            </>

            
    )
}

export default Body;
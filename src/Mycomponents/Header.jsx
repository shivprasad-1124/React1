import React from "react";
import "./Header.css";

function Header(){
    return(
        <div className="container">
            <div className="logo">
                <img src="dcl-logo.png" alt="image loading.."/>
            </div>
            <div className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Fee Structure</a>
            </div>
                <button className="login">Log in</button>
        </div>
    )
}
export default Header;
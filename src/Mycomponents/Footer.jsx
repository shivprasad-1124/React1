import React from "react";
import "./Footer.css";

function Footer(){
    return(
         <div className="fc">
      
      <div className="f-column">
        
        <div className="card purple">
          <div>
            <h4>Interviews Guaranteed</h4>
            <p>Course (We Write & Give)</p>
          </div>
          <span className="icon">👨‍🎓</span>
        </div>

        <div className="card blue">
          <div>
            <h4>End to End Project/Product</h4>
            <p>Life Cycle Exposure</p>
          </div>
          <span className="icon">📄</span>
        </div>

        <div className="card yellow">
          <div>
            <h4>Technology Simplified</h4>
            <p>(From SCRATCH to HOT Project)</p>
          </div>
          <span className="icon">💻</span>
        </div>
      </div>

      <div className="center-box">
        <video src="https://dheecodinglab.com/api/uploads/1734501101884-ForBiggerEscapes.mp4" controls></video>
      </div>

      <div className="f-column">

        <div className="card pink">
          <div>
            <p>6 Months of</p>
            <h4>Extensive Bootcamp Training</h4>
          </div>
          <span className="icon">💡</span>
        </div>

        <div className="card orange">
          <div>
            <p>Learn from</p>
            <h4>IISc, IIT, & MAANG Faculties</h4>
          </div>
          <span className="icon">🤝</span>
        </div>

        <div className="card green">
          <div>
            <h3>1,25,000+</h3>
            <p>Successful Students</p>
          </div>
          <span className="icon">👥</span>
        </div>

      </div>
    </div>
  
    )
}

export default Footer;
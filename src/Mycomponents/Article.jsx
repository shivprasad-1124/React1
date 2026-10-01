import React from "react";
import "./Article.css";

function Article(){
    return(
        <div className="s">
            <div className="img1">
                <img src="https://img.youtube.com/vi/bNmM_ttH8to/hqdefault.jpg" alt="image loading"/>
            </div>
            <div className="img2">
                <img src="https://files.dheecodinglab.com/file/api/v1/files/images/ed0e4a5d-6d4c-4fc6-aa1a-0b27538d97bb.jpg" alt="image loading" />
                <h2>Tanmai N</h2>
                <h2>Software Engineer</h2>
            </div>
            <img src="http://www.w3.org/2000/svg" alt="" />
            <div>
                <p>I am grateful to Dhee Coding Lab for guiding me throughout my learning journey. Their training, support, and encouragement strengthened my problem-solving skills. I truly appreciate the placement on target.</p>
                <hr />
            </div>
            <div className="s1">
                <span class="A">Stack:</span>
                <span class="A">Java full stack</span>
            </div>
            <div className="s1">
                <span class="B">CTC:</span>
                <span class="B">₹13.6 LPA</span>
            </div>
            <div className="s1">
                <span class="C">Passing Year:</span>
                <span class="C">2025</span>
            </div>


        </div>
    )
}
export default Article;
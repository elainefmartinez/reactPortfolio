import React from "react";
import pdfFile from '../../assets/Resume.jpg';

const Resume = () => {
    return (
        <div className="pdflink">
            <h1> Here is a link </h1>
            <a className="resume" href ={pdfFile}> View Full Resume</a>
        </div>
    );
}




export default Resume;

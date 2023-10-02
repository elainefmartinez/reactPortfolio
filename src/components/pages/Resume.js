import React from "react";
import file from '../../assets/Resume.pdf';

const Resume = () => {
    return (
        <div className="pdflink">
            <h1>TEST</h1>
            <a className="newre" href ={file}>View Full Resume</a>
        </div>
    );
}




export default Resume;

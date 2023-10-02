import React from "react";
import file from '../../assets/Resume.pdf';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume">
            <h1>Proficiencies</h1>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    Git
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Node.js
                </li>
                <li>
                    Express.js
                </li>
                <li>
                    React
                </li>
            <a className="resumelink" href ={file}>View Full Resume</a>
        </div>
    );
}




export default Resume;

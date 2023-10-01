import React from "react";
import './Portfolio.css'; 

const Projects () => {
    return (
        <div id='portfolio'>
            <h2 className='portfolioTitle'> Recent Projects</h2>
            <span className="description"> Below are links to some of my most recent project repositories </span>
            <div className ="projectList">
                <li> <a className= "project" href= "https://github.com/elainefmartinez/e-commerce.git"> E-Commerce Back End</a></li>
                <li> <a className= "project" href= "https://github.com/elainefmartinez/Note-Taker.git"> Note Taker</a></li>   
                <li> <a className ="project" href= "https://github.com/elainefmartinez/readme-generator.git"> README generator</a></li>
                <li> <a className= "project" href= "https://github.com/elainefmartinez/employee-tracker.git"> Employee Tracker</a></li>
            </div>


        </div>
    )

    
}


export default Projects;